/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: 'Qamia',
        siteUrl: 'https://www.qamia.ae/'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-svg',
        'gatsby-plugin-smoothscroll',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Qamia - AI & Quantum Solutions Now',
                short_name: 'Qamia',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#184536',
                display: 'standalone',
                icon: 'src/assets/branding/icon.png'
            },
        },
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve('./src/components/layout/index.js'),
            },
        },
    ],
};
