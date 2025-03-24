import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BNB King',
  tagline: 'Documentation for BNB King',
  favicon: 'img/favicon.ico',

  url: 'https://BNBKingClub.github.io',
  baseUrl: '/BNBKING-DOCS/',
  trailingSlash: true,

  organizationName: 'BNBKingClub',
  projectName: 'BNBKING-DOCS',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        label: '简体中文',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'BNB King Logo',
        src: 'img/logo/bnbking_logo.svg',
        srcDark: 'img/logo/bnbking_logo_w.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'docs',
        //   position: 'left',
        //   label: 'Docs',
        // },
        // {
        //   href: 'https://github.com/BNBKingClub/BNBKING-DOCS',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} BNB King. Built with Docusaurus.`,
    },
  },
};

export default config;