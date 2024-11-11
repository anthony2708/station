import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Station',
  tagline: 'Khơi nguồn cảm hứng văn chương...',
  favicon: 'img/favicon/favicon.png',
  staticDirectories: ["public"],

  // Set the production url of your site here
  url: 'https://station.builetuananh.name.vn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anthony2708', // Usually your GitHub org/user name.
  projectName: 'station', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
    localeConfigs: {
      vi: {
        htmlLang: "vi-VN",
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          postsPerPage: 10,
          blogSidebarCount: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: "Station",
            description: "Khơi nguồn cảm hứng văn chương...",
            copyright: `Copyright © ${new Date().getFullYear()} Anthony Bùi Lê Tuấn Anh.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 5 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 5),
                ...rest,
              });
            },
          },
          routeBasePath: '/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        // debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon/station.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(255, 237, 174)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/favicon/station.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/favicon/station.png',
            color: 'rgb(255, 237, 174)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/favicon/favicon.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
    [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          language: ["vi"],
          hashed: true,
          indexDocs: false,
          blogRouteBasePath: ["/"],
          searchResultLimits: 5,
          searchBarShortcutHint: false,
          // highlightSearchTermsOnTargetPage: true,
        },
    ],
],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon/station.png',
    navbar: {
      title: 'Station',
      logo: {
        alt: 'Station',
        src: 'img/favicon/station.png',
      },
      items: [
        {to: '/', label: 'Blog', position: 'left'},
        {
          label: "Trang chủ",
          href: "https://www.builetuananh.name.vn",
          position: "left",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: "https://station.builetuananh.name.vn/atom.xml",
          position: "right",
          className: "header-rss-link", // custom logo in custom.css
          "aria-label": "RSS",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Trang chủ",
          items: [
            {
              label: "Giới thiệu cá nhân",
              href: "https://www.builetuananh.name.vn/docs/intro",
            },
            {
              label: "Tài liệu tham khảo",
              href: "https://www.builetuananh.name.vn/docs/resources",
            },
            {
              label: "90 ngày cùng DevOps",
              href: "https://www.builetuananh.name.vn/docs/90days"
            }
          ],
        },
        {
          title: "Cổng dịch vụ",
          items: [
            {
              label: "URL Shortener",
              href: "https://www.builetuananh.name.vn/services/url",
            },
            {
              label: "English L&T",
              href: "https://www.builetuananh.name.vn/services/courses",
            },
            {
              label: "Dịch vụ khác",
              href: "https://www.builetuananh.name.vn/services",
            },
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anthony Bùi Lê Tuấn Anh. Built with ❤ & <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["docker", "csharp", "bash", "java"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
