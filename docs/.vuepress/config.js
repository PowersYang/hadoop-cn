module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Hadoop中文网',
      description: 'Hadoop中文网、Hadoop中文社区。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Hadoop Chinese Website',
      description: 'Hadoop Chinese Website, Hadoop Chinese community.'
    }
  },
  themeConfig: {
    logo: '/hadoop.jpeg',
    locales: {
      '/': {
        sidebar: require('./sidebar/zh')(),
        repo: 'Y-sir/hadoop-cn',
        editLinks: true,
        docsDir: 'docs',
        lastUpdated: '最后更新',
        smoothScroll: true,
        selectText: '选择语言',
        label: '简体中文',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '首页', link: '/' },
          { text: '下载安装', link: '/docs/releases/' },
          { text: '参考文档', link: '/docs/' },
          { text: '资源教程', link: '/docs/awesome/' },
          { text: '关于', link: '/about/' }
        ],
      },
      '/en/': {
        sidebar: require('./sidebar/en')(),
        repo: 'Y-sir/hadoop-cn',
        editLinks: true,
        docsDir: '/docs/en/',
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Index', link: '/' },
          { text: 'Download', link: '/docs/releases/' },
          { text: 'Documentation', link: '/docs/' },
          { text: 'Awesome', link: '/docs/awesome/' },
          { text: 'About', link: '/about/' }
        ],
      }
    }

  },

  plugins: ['@vuepress/back-to-top']
}
