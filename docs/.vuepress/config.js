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
      description: 'Hadoop Chinese Website, Hadoop Chinese Community.'
    }
  },

  themeConfig: {
    logo: '/hadoop.jpeg',
    repo: 'Y-sir/hadoop-cn',
    editLinks: true,
    docsDir: 'docs',
    smoothScroll: true,
    locales: {
      '/': {
        sidebar: require('./sidebar/zh')(),
        lastUpdated: '最后更新',
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '首页', link: '/' },
          { text: '下载安装', link: '/docs/releases/download' },
          { text: '参考文档', link: '/docs/' },
          { text: '资源教程', link: '/docs/awesome/' },
          { text: '最新消息', link: '/docs/releases/latestnews' },
          { text: '关于', link: '/about/' }
        ],
      },
      '/en/': {
        sidebar: require('./sidebar/en')(),
        lastUpdated: 'Last Updated',
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Download', link: '/en/releases/download' },
          { text: 'Documentation', link: '/en/docs/' },
          { text: 'Awesome', link: '/en/awesome/' },
          { text: 'Latest News', link: '/en/docs/releases/latestnews' },
          { text: 'About', link: '/en/about/' }
        ],
      }
    }
  },

  plugins: ['@vuepress/back-to-top']
}
