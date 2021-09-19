module.exports = {
  title: '✍️ </>',
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' }],
  ],
  themeConfig: {
		docsDir: 'docs',
    repo: 'lencx/code-snippets',
    repoLabel: '点 ⭐️ 不迷路',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '编辑此页面',
    lastUpdated: '最后更新时间',

    nav: [
      { text: 'Article', link: '/posts/guide/', activeMatch: '^/posts/' },
      { text: 'JavaScript', link: '/js/array/forEach/', activeMatch: '^/js/' },
      { text: 'CSS', link: '/css/mixin/scss', activeMatch: '^/css/' },
    ],

    sidebar: {
      '/posts/': getPosts(),
      '/js/': getJS(),
      '/css/': getCss(),
    }
  }
}

function getPosts() {
  return [
    { text: 'Guide', link: '/posts/guide/' },
    {
      text: 'Article',
      collapsable: true,
      children: [
        { text: 'This 关键字详解', link: '/posts/this/' },
      ],
    }
  ]
}

function getJS() {
  return [
    {
      text: 'Array',
      children: [
        { text: 'forEach', link: '/js/array/forEach/' },
        { text: 'map', link: '/js/array/map/' },
        { text: 'filter', link: '/js/array/filter/' },
        { text: 'reduce', link: '/js/array/reduce/' },
      ],
    },
    {
      text: 'Function',
      children: [
        { text: 'call', link: '/js/func/call/' },
        { text: 'apply', link: '/js/func/apply/' },
      ],
    },
    {
      text: 'Node.js',
      children: [
        { text: 'Event Emitter', link: '/js/node/eventemitter/' },
      ],
    },
    {
      text: 'Utils',
      children: [
        { text: 'curry', link: '/js/utils/curry/' },
        { text: 'sleep', link: '/js/utils/sleep/' },
      ],
    },
    {
      text: 'Browser',
      children: [
        { text: 'getURLParameters', link: '/js/browser/getURLParameters/' },
      ],
    }
  ]
}

function getCss() {
  return [
    {
      text: 'Scss',
      children: [
        { text: 'Mixin', link: '/css/mixin/scss' },
      ],
    },
  ]
}