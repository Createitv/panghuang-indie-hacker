import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types/default-theme'
import { slidebarGo } from './slidebarGo'

export default defineConfig({
  lang: 'zh-CN',
  title: '独立开发者彷丶徨丶',
  description: '独立开发者彷丶徨丶 全栈教程笔记 notebook',
  // 暗黑模式
  appearance: 'dark',
  // 上次提交更新实践记录
  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],
  // markdown 解析配置
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
    headers: {
      level: [0, 0],
    },

  },

  themeConfig: {
    // 上方导航栏
    nav: nav(),
    aside: false,
    // 侧边栏
    sidebar: {
      '/golang/': slidebarGo(),
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '点我向作者反应问题',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 独立开发者彷丶徨丶',
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress',
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg',
    },
    //
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
  },

})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Golang从入门到实践', link: '/golang/basic/what-is-golang', activeMatch: '/golang/' },
    // {
    //   text: 'Config Reference',
    //   link: '/config/introduction',
    //   activeMatch: '/config/'
    // },
    // {
    //   text: 'Runtime API',
    //   link: '/api/',
    //   activeMatch: '/api/'
    // },
    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: 'Contributing',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}
