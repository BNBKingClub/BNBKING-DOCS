import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BNB King',
  tagline: 'Documentation for BNB King',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://BNBKingClub.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/BNBKING-DOCS/',
  trailingSlash: true,

  // GitHub pages deployment config
  organizationName: 'BNBKingClub', // Usually your GitHub org/user name.
  projectName: 'BNBKING-DOCS', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve the docs at the site's root
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'BNB King',
      logo: {
        alt: 'BNB King Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/BNBKingClub/BNBKING-DOCS',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/bnbkingclub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BNB King. Built with Docusaurus.`,
    },
  },
};

export default config;