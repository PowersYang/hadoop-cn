module.exports = {
  title: 'Hadoop中文网',
  description: 'Hadoop官方文档中文社区',
  head: [
    ['link', { rel: 'icon', href: '/hadoop.jpeg' }]
  ],  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },                      // 根路径
      { text: '下载安装', link: 'https://hadoop.apache.org/releases.html' },
      { text: '参考文档', link: 'https://google.com' }, // 外部链接
      { text: '资源教程', link: '/docs/awesome/'},
      {
        text: '语言支持',
        items: [
          { text: '简体中文', link: '/language/ch' },
          { text: 'English', link: '/language/en' }
        ]
      },
      {text: '关于', link: '/about/'}
    ]
  }
}
