const { resolve } = require('node:path');
const fs = require('fs').promises;

const titleToSlug = str => str.replaceAll(' ', '-').replaceAll('&', 'and').toLowerCase();

const generatePages = async () => {
    try {
        const pages = [];
        const files = await fs.readdir('./src/data');

        for (const res of files) {
            if (!['.DS_Store', 'shared'].includes(res)) {
                switch (res) {
                    case 'news':
                    case 'services':
                        res === 'news' && pages.push({
                            slug: res,
                            url: `/${res}`,
                        });
                        const data = await fs.readFile(`./src/data/${res}/index.js`, 'utf8');
                        const regex = /slug:\s*'([^']*)'/g;
                        let match;

                        while ((match = regex.exec(data)) !== null) {
                            pages.push({
                                slug: res,
                                subSlug: titleToSlug(match[1]),
                                url: `/${res}/${titleToSlug(match[1])}`,
                            });
                        }
                        break;
                    case 'homepage':
                        pages.push({
                            url: '/',
                            slug: res,
                        });
                        break;
                    default:
                        pages.push({
                            slug: res,
                            url: `/${res}`,
                        });
                        break;
                }
            }
        }

        return pages;
    } catch (err) {
        console.error('Error generating pages:', err);
    }
};

exports.createPages = async ({ actions }) => {
    const { createPage } = actions;

    const pages = await generatePages();

    pages.forEach(page => {
        const { slug, subSlug, url } = page;
        const title = url.replace('/', '').replace('-', ' ').toUpperCase();
        createPage({
            path: url,
            component: resolve(`src/pages/index.js`),
            context: {
                slug,
                title,
                subSlug,
            },
        });
    });
};
