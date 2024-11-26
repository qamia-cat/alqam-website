import { useLocation } from '@reach/router';

import news from '../data/news';
import aboutUs from '../data/about-us';
import homepage from '../data/homepage';
import services from '../data/services';

const useContent = () => {
    const location = useLocation();

    switch (true) {
        case location.pathname === '/':
            return homepage;
        case location.pathname === '/about-us/':
            return aboutUs;
        case location.pathname === '/news/':
            return news;
        case location.pathname.includes('/news/'):
            const parsedSlug = location.pathname.replace('/news/', '').replaceAll('/', '');
            return news.list.find(item => item.slug === parsedSlug) || {};
        case location.pathname === '/services/':
            return {};
        case location.pathname.includes('/services/'):
            const parsedServiceSlug = location.pathname.replace('/services/', '').replaceAll('/', '');
            return services.find(service => service.slug === parsedServiceSlug) || {};
        default:
            return {};
    }
};

export default useContent;
