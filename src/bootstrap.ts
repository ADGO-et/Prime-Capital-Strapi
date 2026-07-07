import fs from 'fs';
import path from 'path';
import type { Core } from '@strapi/strapi';
import { teamMembers } from './data/team-members';
import { aboutPageSeed, contactPageSeed, homePageSeed, servicesPageSeed } from './data/site-pages';
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
];

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

async function uploadSeedPhoto(strapi: Core.Strapi, fileName: string) {
  // src/ (not dist/) on purpose: binary assets aren't copied by the TS build.
  const filepath = path.join(process.cwd(), 'src', 'data', 'seed-images', fileName);
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
        photo: photo.id,
      },
      status: 'published',
    });
  }

  strapi.log.info(`Seeded ${teamMembers.length} team members`);
}

async function seedAboutPage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::about-page.about-page').findFirst({});
  if (existing) return;

  const { orgChartImageFile, ...data } = aboutPageSeed;
  const orgChartImage = await uploadSeedPhoto(strapi, orgChartImageFile);

  await strapi.documents('api::about-page.about-page').create({
    data: { ...data, orgChartImage: orgChartImage.id },
    status: 'published',
  });

  strapi.log.info('Seeded About page');
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

  for (const slide of heroSlides) {
    const image = await uploadSeedPhoto(strapi, slide.imageFile);

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
  }

  strapi.log.info(`Seeded ${heroSlides.length} hero slides`);
}

async function seedHomePage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::home-page.home-page').findFirst({});
  if (existing) return;

  await strapi.documents('api::home-page.home-page').create({
    data: homePageSeed,
    status: 'published',
  });

  strapi.log.info('Seeded Home page');
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

export default async function bootstrap({ strapi }: { strapi: Core.Strapi }) {
  await setPublicPermissions(strapi);
  await seedTeamMembers(strapi);
  await seedAboutPage(strapi);
  await seedContactPage(strapi);
  await seedHeroSlides(strapi);
  await seedHomePage(strapi);
  await seedServicesPage(strapi);
  await seedListedCompanies(strapi);
}
