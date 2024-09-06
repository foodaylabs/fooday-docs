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
    locales: ['en', 'zh-Hant', 'ja'],
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
          editUrl: 'https://github.com/foodaylabs/fooday-docs/tree/main/docs',
        },
        blog: {
          path: 'blog',
          // Simple use-case: string editUrl
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // Advanced use-case: functional editUrl
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/foodaylabs/fooday-docs/tree/main/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: 'Fooday Blog | Top Picks & User Reviews',
          blogDescription: 'Get updated to the latest popular restaurants and reviews picked by Fooday',
          blogSidebarCount: 10,
          blogSidebarTitle: 'All our posts',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: false,
          feedOptions: {
            type: 'json',
            title: 'Fooday Blog',
            description: 'Get updated to the latest popular restaurants and reviews picked by Fooday',
            copyright: 'Fooday',
            language: undefined,
            createFeedItems: async params => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              })
            },
          },
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
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
          href: 'https://fooday.app',
          target: '_self',
        },
        items: [
          {
            to: 'https://fooday.app/docs',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://fooday.app/blog',
            label: 'Blog',
            position: 'right',
            target: '_self',
          },
          {
            type: 'localeDropdown',
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
                label: 'Fooday Whitepaper',
                to: '/',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy-policy',
              },
              {
                label: 'Terms of Service',
                to: '/tos',
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
                label: 'Threads',
                href: 'https://www.threads.net/@fooday.app',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/foodaylabs',
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
                label: 'About Fooday',
                to: 'https://fooday.app/about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fooday',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fooday, Inc.`,
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
      facebook: 'https://www.facebook.com/foodaylabs',
      medium: 'https://fooday.medium.com',
    },
    emails: {
      contact: 'hi@fooday.app',
    },
    apiEndpoint: 'https://asia-east1-fooday-beta.cloudfunctions.net/landing-api-gen1',
  },
}

module.exports = config
