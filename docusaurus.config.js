// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fooday',
  tagline: 'Foodies United: Leave Reviews, Earn Rewards',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://fooday.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fooday', // Usually your GitHub org/user name.
  projectName: 'fooday-docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hant'],
  },

  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-MNGXDNM',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/foodao/fooday-docs/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/og-image.jpg',
      metadata: [],
      navbar: {
        title: 'Fooday',
        logo: {
          alt: 'Fooday Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/foodao',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/foodayapp',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/fooday.app',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/6Q3Xa7fRV4',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://fooday.medium.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fooday',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fooday, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  customFields: {
    links: {
      docs: 'https://docs.google.com/presentation/d/11C2RwS5EwNushHBQoy2Z622zhiBRdzVh40rRIrFUJxk',
      presale: 'https://presale.fooday.app',
      discord: 'https://discord.gg/6Q3Xa7fRV4',
      ig: 'https://www.instagram.com/fooday.app',
      twitter: 'https://twitter.com/foodayapp',
      medium: 'https://fooday.medium.com',
    },
    emails: {
      contact: 'hi@fooday.app',
    },
    apiEndpoint: 'https://asia-east1-fooday-beta.cloudfunctions.net/landing-api-gen1',
  },
}

module.exports = config
