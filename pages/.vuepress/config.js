module.exports = {
    theme: "lec-cafe",
    title: '実践Webコーディング',
    description: 'HTML/CSS を使った Web 制作技術について、現場で使えるテクニックを紹介します。',
    head: [
        ['script', { src: "https://static.codepen.io/assets/embed/ei.js"}]
    ],
    locales: {
        '/': {
            lang: 'ja',
        },
    },
    markdown: {
        anchor: {
            level: [1,2,3],
            slugify: (s) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-')),
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#'
        }
    },
    themeConfig: {
        nav: [
            { text: 'Lec Café', link: 'https://leccafe.connpass.com/' },
        ],
        sidebar: [
            '/コンテナとレイアウト',
            '/レスポンシブデザイン',
            '/クラス名の管理',
        ],
    }
}