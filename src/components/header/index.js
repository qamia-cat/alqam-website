import scrollTo from 'gatsby-plugin-smoothscroll';
import { conditionalSpread } from 'clyne-core';
import { useLocation } from '@reach/router';
import React, { useState } from 'react';
import classNames from 'classnames';

import To from '../to';
import Logo from '../logo';
import Icon from '../icon';
import Animate from '../animate';

import useRoutes from '../../hooks/useRoutes';

import { arrayChunks, contactBlockId, servicesBlockId } from '../../helpers';

import news from '../../data/news';

import services from '../../data/services';

import './index.scss';

const Header = () => {
    const routes = useRoutes();
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const servicesRoutes = routes.filter(route => route.includes('/services/'));

    const content = [
        ...conditionalSpread([
            {
                label: 'Home',
                url: '/',
                className: 'hide-on-mobile',
            },
        ], !news?.list?.length),
        {
            label: 'Services',
            ...(services.every(services => services.article) ? {
                children: servicesRoutes.map(url => ({
                    url,
                    label: services.find(service => url.includes(service.slug))?.title,
                })),
            } : location.pathname === '/' ? {
                onClick: () => scrollTo(`#${servicesBlockId}`),
            } : {
                url: `/#${servicesBlockId}`,
            }),
        },
        {
            label: 'About Us',
            url: '/about-us/',
        },
        ...conditionalSpread([
            {
                label: 'News',
                url: '/news/',
            },
        ], !!news?.list?.length),
        {
            label: 'Contact Us',
            onClick: () => scrollTo(`#${contactBlockId}`),
        },
    ];

    const [left, right] = arrayChunks(content, Math.ceil(content.length / 2));

    const navigationRenderer = (arr, reverse) => arr.map((route, index) => {
        const className = classNames(
            'route-item',
            route.className,
        );

        return (
            <Animate
                fit
                key={route.label}
                delay={reverse ? (index + 1) * 200 : (arr.length - index) * 200}
            >
                {route.onClick ? (
                    <button
                        className={className}
                        onClick={route.onClick}
                    >
                        {route.label}
                    </button>
                ) : route.children ? (
                    <div className='header-dropdown-holder'>
                        <button
                            className={className}
                            onClick={() => setDropdownOpen(val => !val)}
                        >
                            <span>{route.label}</span>
                            <Icon
                                size={20}
                                type='icon-chevron-down'
                            />
                        </button>
                        <ul
                            className={classNames(
                                'header-dropdown-contents',
                                {
                                    active: dropdownOpen,
                                }
                            )}
                        >
                            <li>
                                {route.children.map(route => (
                                    <To
                                        url={route.url}
                                        key={route.url}
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        {route.label}
                                    </To>
                                ))}
                            </li>
                        </ul>
                    </div>
                ) : (
                    <To
                        url={route.url}
                        className={className}
                    >
                        {route.label}
                    </To>
                )}
            </Animate>
        );
    });

    return (
        <header>
            <div className='guide'>
                <ul className='header-contents'>
                    <li>
                        {navigationRenderer(left)}
                    </li>
                    <li>
                        <Animate fit>
                            <Logo />
                        </Animate>
                    </li>
                    <li>
                        {navigationRenderer(right, true)}
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
