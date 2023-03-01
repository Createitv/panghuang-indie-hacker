import type { DefaultTheme } from 'vitepress/types/default-theme'

export function slidebarGo(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Golang从入门到实践',
      // go语言基础
      items: [
        {
          text: '第一章 Go语言基础',
          collapsed: true,
          items: [
            {
              text: 'Go语言是什么',
              link: '/golang/basic/what-is-golang',
            },
            {
              text: 'Go语言的安装',
              link: '/golang/basic/install-golang',
            },
            {
              text: 'Golang的环境变量',
              link: '/golang/basic/golang-env',
            },
            {
              text: 'Golang的第一个程序',
              link: '/golang/basic/first-golang',
            },
            {
              text: 'Golang的基本语法',
              link: '/golang/basic/golang-syntax',
            },
            {
              text: 'Golang的基本数据类型',
              link: '/golang/basic/golang-data-type',
            },
            {
              text: 'Golang的运算符',
              link: '/golang/basic/golang-operator',
            },
            {
              text: 'Golang的流程控制',
              link: '/golang/basic/golang-flow-control',
            },
            {
              text: 'Golang的函数',
              link: '/golang/basic/golang-function',
            },
            {
              text: 'Golang的数组',
              link: '/golang/basic/golang-array',
            },
            {
              text: 'Golang的切片',
              link: '/golang/basic/golang-slice',
            },
            {
              text: 'Golang的映射',
              link: '/golang/basic/golang-map',
            },
            {
              text: 'Golang的结构体',
              link: '/golang/basic/golang-struct',
            },
            {
              text: 'Golang的接口',
              link: '/golang/basic/golang-interface',
            },
            {
              text: 'Golang的并发',
              link: '/golang/basic/golang-concurrent',
            },
            {
              text: 'Golang的错误处理',
              link: '/golang/basic/golang-error',
            },
            {
              text: 'Golang的反射',
              link: '/golang/basic/golang-reflection',
            },
            {
              text: 'Golang的包',
              link: '/golang/basic/golang-package',
            },
            {
              text: 'Golang的测试',
              link: '/golang/basic/golang-test',
            },
            {
              text: 'Golang的工具',
              link: '/golang/basic/golang-tools',
            },
          ],
        },

        // Goland 面向对象
        {
          text: '第二章 Go语言进阶',
          collapsed: true,
          items: [
            {
              text: 'Golang的面向对象',
              link: '/golang/advance/golang-oop',
            },
            {
              text: 'Golang的面向对象进阶',
              link: '/golang/advance/golang-oop-advance',
            },
            {
              text: 'Golang的面向对象进阶2',
              link: '/golang/advance/golang-oop-advance2',
            },
          ],
        },

        // golang 数据结构与算法

        // golang 设计模式

        // golang web开发

      // golang 并发编程
      ],
    },
  ]
}
