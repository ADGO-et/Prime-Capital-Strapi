import fs from 'fs';
import path from 'path';
import type { Core } from '@strapi/strapi';
import { teamMembers } from './data/team-members';
import {
  aboutPageSeed,
  contactPageSeed,
  homePageSeed,
  servicesPageSeed,
  vacancyPageSeed,
  newsPageSeed,
  ourTeamPageSeed,
  listedCompaniesPageSeed,
  navigationSeed,
  footerSeed,
} from './data/site-pages';
import { heroSlides } from './data/hero-slides';
import { listedCompanies } from './data/listed-companies';

const PUBLIC_READ_ACTIONS = [
  'api::team-member.team-member.find',
  'api::team-member.team-member.findOne',
  'api::news-article.news-article.find',
  'api::news-article.news-article.findOne',
  'api::job-vacancy.job-vacancy.find',
  'api::job-vacancy.job-vacancy.findOne',
  'api::about-page.about-page.find',
  'api::contact-page.contact-page.find',
  'api::hero-slide.hero-slide.find',
  'api::hero-slide.hero-slide.findOne',
  'api::home-page.home-page.find',
  'api::services-page.services-page.find',
  'api::listed-company.listed-company.find',
  'api::listed-company.listed-company.findOne',
  'api::vacancy-page.vacancy-page.find',
  'api::news-page.news-page.find',
  'api::our-team-page.our-team-page.find',
  'api::listed-companies-page.listed-companies-page.find',
  'api::navigation.navigation.find',
  'api::footer.footer.find',
];

/**
 * Content types added after the initial `strapi develop` typegen pass aren't
 * in the generated ContentType union yet, so `strapi.documents()` needs a
 * loosely-typed wrapper for them until the types regenerate.
 */
function looseDocuments(strapi: Core.Strapi) {
  return strapi.documents as (uid: string) => ReturnType<Core.Strapi['documents']>;
}

async function setPublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) return;

  for (const action of PUBLIC_READ_ACTIONS) {
    const existing = await strapi.query('plugin::users-permissions.permission').findOne({
      where: { action, role: publicRole.id },
    });

    if (!existing) {
      await strapi.query('plugin::users-permissions.permission').create({
        data: { action, role: publicRole.id },
      });
    }
  }
}

/**
 * Uploads a seed image if present, otherwise returns null instead of throwing.
 * Some deploy artifacts only ship `dist/` (binary assets under src/ aren't
 * copied by the TS build), so this must never crash the boot process — a
 * missing photo is a cosmetic gap an admin can fix later, not a reason to
 * take the whole app down.
 */
async function uploadSeedPhoto(strapi: Core.Strapi, fileName: string) {
  const filepath = path.join(process.cwd(), 'src', 'data', 'seed-images', fileName);

  if (!fs.existsSync(filepath)) {
    strapi.log.warn(`Seed image not found, skipping: ${filepath}`);
    return null;
  }

  try {
    const stats = fs.statSync(filepath);
    const mimetype = fileName.endsWith('.png') ? 'image/png' : 'image/jpeg';

    const uploadService = strapi.plugin('upload').service('upload');
    const [file] = await uploadService.upload({
      data: {},
      files: {
        filepath,
        originalFilename: fileName,
        mimetype,
        size: stats.size,
      },
    });

    return file;
  } catch (err) {
    strapi.log.warn(`Failed to upload seed image "${fileName}": ${(err as Error).message}`);
    return null;
  }
}

async function seedTeamMembers(strapi: Core.Strapi) {
  const existingCount = await strapi.documents('api::team-member.team-member').count({});
  if (existingCount > 0) return;

  for (const member of teamMembers) {
    const photo = await uploadSeedPhoto(strapi, member.imageFile);

    await strapi.documents('api::team-member.team-member').create({
      data: {
        name: member.name,
        role: member.role,
        category: member.category,
        order: member.order,
        edu: member.edu,
        summary: member.summary,
        appointed: member.appointed ?? false,
        photo: photo?.id ?? null,
      },
      status: 'published',
    });
  }

  strapi.log.info(`Seeded ${teamMembers.length} team members`);
}

async function seedAboutPage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::about-page.about-page').findFirst({});

  if (!existing) {
    const { orgChartImageFile, ...data } = aboutPageSeed;
    const orgChartImage = await uploadSeedPhoto(strapi, orgChartImageFile);

    await strapi.documents('api::about-page.about-page').create({
      data: { ...data, orgChartImage: orgChartImage?.id ?? null },
      status: 'published',
    });
    strapi.log.info('Seeded About page');
    return;
  }

  // Backfill fields added after the page was first seeded, so upgrades
  // don't leave required fields empty on the existing record.
  const existingRecord = existing as Record<string, unknown>;
  const missing: Record<string, unknown> = {};
  for (const key of [
    'overviewHeading',
    'coreValuesHeading',
    'strategicContextHeading',
    'governanceHeading',
    'governanceCards',
    'csrHeading',
  ] as const) {
    if (existingRecord[key] == null) missing[key] = aboutPageSeed[key];
  }

  if (Object.keys(missing).length > 0) {
    await strapi.documents('api::about-page.about-page').update({
      documentId: existing.documentId,
      data: missing,
      status: 'published',
    });
    strapi.log.info(`Backfilled About page fields: ${Object.keys(missing).join(', ')}`);
  }
}

async function seedContactPage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::contact-page.contact-page').findFirst({});
  if (existing) return;

  await strapi.documents('api::contact-page.contact-page').create({
    data: contactPageSeed,
    status: 'published',
  });

  strapi.log.info('Seeded Contact page');
}

async function seedHeroSlides(strapi: Core.Strapi) {
  const existingCount = await strapi.documents('api::hero-slide.hero-slide').count({});
  if (existingCount > 0) return;

  let seededCount = 0;

  for (const slide of heroSlides) {
    const image = await uploadSeedPhoto(strapi, slide.imageFile);

    if (!image) {
      // image is a required field on this content type; without one the
      // entry would fail validation, so skip it rather than half-seed it.
      strapi.log.warn(`Skipping hero slide "${slide.title}": no image available`);
      continue;
    }

    await strapi.documents('api::hero-slide.hero-slide').create({
      data: {
        title: slide.title,
        description: slide.description,
        alignment: slide.alignment,
        order: slide.order,
        buttons: slide.buttons ?? [],
        image: image.id,
      },
      status: 'published',
    });
    seededCount += 1;
  }

  strapi.log.info(`Seeded ${seededCount} of ${heroSlides.length} hero slides`);
}

async function seedHomePage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::home-page.home-page').findFirst({});

  if (!existing) {
    await strapi.documents('api::home-page.home-page').create({
      data: homePageSeed,
      status: 'published',
    });
    strapi.log.info('Seeded Home page');
    return;
  }

  // Backfill fields added after the page was first seeded, so upgrades
  // don't leave required fields empty on the existing record.
  const existingRecord = existing as Record<string, unknown>;
  const missing: Record<string, unknown> = {};
  for (const key of ['strengthsHeading', 'strengthsSubtext', 'visionMissionHeading'] as const) {
    if (existingRecord[key] == null) missing[key] = homePageSeed[key];
  }

  if (Object.keys(missing).length > 0) {
    await strapi.documents('api::home-page.home-page').update({
      documentId: existing.documentId,
      data: missing,
      status: 'published',
    });
    strapi.log.info(`Backfilled Home page fields: ${Object.keys(missing).join(', ')}`);
  }
}

async function seedServicesPage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::services-page.services-page').findFirst({});
  if (existing) return;

  await strapi.documents('api::services-page.services-page').create({
    data: servicesPageSeed,
    status: 'published',
  });

  strapi.log.info('Seeded Services page');
}

async function seedListedCompanies(strapi: Core.Strapi) {
  const existingCount = await strapi.documents('api::listed-company.listed-company').count({});
  if (existingCount > 0) return;

  for (const company of listedCompanies) {
    await strapi.documents('api::listed-company.listed-company').create({
      data: company,
      status: 'published',
    });
  }

  strapi.log.info(`Seeded ${listedCompanies.length} listed companies`);
}

async function seedVacancyPage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::vacancy-page.vacancy-page').findFirst({});

  if (!existing) {
    await strapi.documents('api::vacancy-page.vacancy-page').create({
      data: vacancyPageSeed,
      status: 'published',
    });
    strapi.log.info('Seeded Vacancy page');
    return;
  }

  // Backfill fields added after the page was first seeded, so upgrades
  // don't leave required fields empty on the existing record.
  const existingRecord = existing as Record<string, unknown>;
  const missing: Record<string, unknown> = {};
  for (const key of ['heroTitle', 'heroSubtitle', 'heroButtonText'] as const) {
    if (existingRecord[key] == null) missing[key] = vacancyPageSeed[key];
  }

  if (Object.keys(missing).length > 0) {
    await strapi.documents('api::vacancy-page.vacancy-page').update({
      documentId: existing.documentId,
      data: missing,
      status: 'published',
    });
    strapi.log.info(`Backfilled Vacancy page fields: ${Object.keys(missing).join(', ')}`);
  }
}

async function seedNewsPage(strapi: Core.Strapi) {
  const documents = looseDocuments(strapi);
  const existing = await documents('api::news-page.news-page').findFirst({});
  if (existing) return;

  await documents('api::news-page.news-page').create({
    data: newsPageSeed as any,
    status: 'published',
  });

  strapi.log.info('Seeded News page');
}

async function seedOurTeamPage(strapi: Core.Strapi) {
  const documents = looseDocuments(strapi);
  const existing = await documents('api::our-team-page.our-team-page').findFirst({});
  if (existing) return;

  await documents('api::our-team-page.our-team-page').create({
    data: ourTeamPageSeed as any,
    status: 'published',
  });

  strapi.log.info('Seeded Our Team page');
}

async function seedListedCompaniesPage(strapi: Core.Strapi) {
  const documents = looseDocuments(strapi);
  const existing = await documents('api::listed-companies-page.listed-companies-page').findFirst({});
  if (existing) return;

  await documents('api::listed-companies-page.listed-companies-page').create({
    data: listedCompaniesPageSeed as any,
    status: 'published',
  });

  strapi.log.info('Seeded Listed Companies page');
}

async function seedNavigation(strapi: Core.Strapi) {
  const documents = looseDocuments(strapi);
  const existing = await documents('api::navigation.navigation').findFirst({});
  if (existing) return;

  const { logoFile, ...data } = navigationSeed;
  const logo = await uploadSeedPhoto(strapi, logoFile);

  await documents('api::navigation.navigation').create({
    data: { ...data, logo: logo?.id ?? null } as any,
  });

  strapi.log.info('Seeded Navigation');
}

async function seedFooter(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::footer.footer').findFirst({});

  if (!existing) {
    const { logoFile, ...data } = footerSeed;
    const logo = await uploadSeedPhoto(strapi, logoFile);

    await strapi.documents('api::footer.footer').create({
      data: { ...data, logo: logo?.id ?? null },
    });
    strapi.log.info('Seeded Footer');
    return;
  }

  // Backfill fields added after the footer was first seeded, so upgrades
  // don't leave required fields empty on the existing record.
  const existingRecord = existing as Record<string, unknown>;
  const missing: Record<string, unknown> = {};
  for (const key of ['quickLinks', 'serviceLinks', 'copyrightText'] as const) {
    if (existingRecord[key] == null) missing[key] = footerSeed[key];
  }
  if (existingRecord.logo == null) {
    const logo = await uploadSeedPhoto(strapi, footerSeed.logoFile);
    if (logo) missing.logo = logo.id;
  }

  if (Object.keys(missing).length > 0) {
    await strapi.documents('api::footer.footer').update({
      documentId: existing.documentId,
      data: missing,
    });
    strapi.log.info(`Backfilled Footer fields: ${Object.keys(missing).join(', ')}`);
  }
}

export default async function bootstrap({ strapi }: { strapi: Core.Strapi }) {
  await setPublicPermissions(strapi);
  await seedTeamMembers(strapi);
  await seedAboutPage(strapi);
  await seedContactPage(strapi);
  await seedHeroSlides(strapi);
  await seedHomePage(strapi);
  await seedServicesPage(strapi);
  await seedListedCompanies(strapi);
  await seedVacancyPage(strapi);
  await seedNewsPage(strapi);
  await seedOurTeamPage(strapi);
  await seedListedCompaniesPage(strapi);
  await seedNavigation(strapi);
  await seedFooter(strapi);
}
