module.exports = {
    base: '/blog/',
    title: '前端',
    description: '所见即所想 所想即所为',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/guanxiaolong/blog.git',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'JS', link: '/JShome.md' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/ast.md', 'AST抽象语法树'],
            ['/blog/fp.md', '浏览器指纹识别'],
            ['/blog/muchmuch.md', '多异步等待结果方案'],
        ]
    }
}
