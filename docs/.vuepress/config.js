module.exports = {
  title: 'Hadoop中文网',
  description: 'Hadoop官方文档中文社区',
  head: [
    ['link', { rel: 'icon', href: '/hadoop.jpeg' }]
  ],  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },                      // 根路径
      { text: '下载', link: 'https://hadoop.apache.org/releases.html' },
      { text: '文档', link: 'https://google.com' }, // 外部链接
      // 显示下拉列表
      {
        text: '语言',
        items: [
          { text: '中文', link: '/language/ch' },
          { text: '英文', link: '/language/en' }
        ]
      },
      {text: '关于', link: '/about/'}
    ]
  }
}
