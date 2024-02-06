import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogPostsSelection extends Schema.Component {
  collectionName: 'components_blog_posts_selections';
  info: {
    displayName: 'postsSelection';
    icon: 'discuss';
  };
  attributes: {
    heading: Attribute.String;
    featuresPosts: Attribute.Relation<
      'blog.posts-selection',
      'oneToMany',
      'api::post.post'
    >;
  };
}

export interface ConfigSocialLink extends Schema.Component {
  collectionName: 'components_config_social_links';
  info: {
    displayName: 'socialLink';
  };
  attributes: {
    socialMedai: Attribute.Enumeration<['github', 'meta', 'viber']> &
      Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutFeateredCourse extends Schema.Component {
  collectionName: 'components_layout_featered_courses';
  info: {
    displayName: 'feateredCourse';
    description: '';
  };
  attributes: {
    course: Attribute.Relation<
      'layout.featered-course',
      'oneToOne',
      'api::course.course'
    >;
    heading: Attribute.String;
    announcement: Attribute.Text;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    callToAction: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    buttons: Attribute.Component<'layout.link', true>;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LayoutMission extends Schema.Component {
  collectionName: 'components_layout_missions';
  info: {
    displayName: 'mission';
    icon: 'check';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'my mission'>;
    content: Attribute.Text & Attribute.Required;
    showLogo: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface LayoutNewsLatterForm extends Schema.Component {
  collectionName: 'components_layout_news_latter_forms';
  info: {
    displayName: 'newsLatterForm';
    icon: 'television';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text;
  };
}

export interface LayoutPageInfo extends Schema.Component {
  collectionName: 'components_layout_page_infos';
  info: {
    displayName: 'PageInfo';
    icon: 'apps';
  };
  attributes: {
    content: Attribute.Blocks;
    cover: Attribute.Media;
    seo: Attribute.Component<'seo.seo-information', true>;
  };
}

export interface LayoutServicesPreview extends Schema.Component {
  collectionName: 'components_layout_services_previews';
  info: {
    displayName: 'servicesPreview';
    icon: 'cup';
  };
  attributes: {
    services: Attribute.Relation<
      'layout.services-preview',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seoInformation';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.posts-selection': BlogPostsSelection;
      'config.social-link': ConfigSocialLink;
      'layout.featered-course': LayoutFeateredCourse;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.mission': LayoutMission;
      'layout.news-latter-form': LayoutNewsLatterForm;
      'layout.page-info': LayoutPageInfo;
      'layout.services-preview': LayoutServicesPreview;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
