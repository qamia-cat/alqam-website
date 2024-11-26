import { graphql, useStaticQuery } from 'gatsby';

const useRoutes = () => {
    const {
        pages: {
            nodes,
        },
    } = useStaticQuery(graphql`
        {
            pages: allSitePage {
                nodes {
                    path
                }
            }
        }
    `);

    return nodes.filter(node => !node.path.includes('404') && (node.path.includes('/news/') ? node.path === '/news/' : node.path)).map(node => node.path);
};

export default useRoutes;
