module.exports = {
  title: 'Hadoop中文网',
  description: 'Hadoop官方文档中文社区',
  head: [
    ['link', { rel: 'icon', href: '/hadoop.jpeg' }]
  ],  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },                      
      { text: '下载安装', link: 'https://hadoop.apache.org/releases.html' },
      { text: '参考文档', 
		items: [
			{ text: '通用', link: ''},
			{ text: '公共', link: ''},
			{ text: 'HDFS', link: ''},
			{ text: 'MapReduce', link: ''},
			{ text: 'MapReduce REST APIs', link: ''},
			{ text: 'YARN REST APIs', link: ''},
			{ text: 'YARN Service', link: ''},
			{ text: 'Submarine', link: ''},
			{ text: 'Hadoop兼容文件系统', link: ''},
			{ text: 'Auth', link: ''},
			{ text: '工具', link: ''},
			{ text: '参考', link: ''},
			{ text: '配置', link: ''},
		]
	  },
      { text: '资源教程', link: '/docs/awesome/'},
      {
        text: '语言支持',
        items: [
          { text: '简体中文', link: '/language/ch' },
          { text: 'English', link: '/language/en' }
        ]
      },
      {text: '关于', link: '/about/'}
    ],
	sidebar: 'auto'
  }
}
