import type { Schema, Struct } from '@strapi/strapi';

export interface SharedHeroButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_buttons';
  info: {
    description: 'A call-to-action button shown on a hero slide';
    displayName: 'Hero Button';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_items';
  info: {
    description: 'A label paired with a URL, e.g. a document or website link';
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    description: 'One line of a list, e.g. a single degree or a single experience entry';
    displayName: 'List Item';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      [
        'linkedin',
        'instagram',
        'twitter',
        'youtube',
        'telegram',
        'facebook',
        'whatsapp',
        'tiktok',
        'email',
      ]
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTitleDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_descriptions';
  info: {
    description: 'A short title paired with a one or two sentence description';
    displayName: 'Title + Description';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.hero-button': SharedHeroButton;
      'shared.link-item': SharedLinkItem;
      'shared.list-item': SharedListItem;
      'shared.social-link': SharedSocialLink;
      'shared.title-description': SharedTitleDescription;
    }
  }
}
