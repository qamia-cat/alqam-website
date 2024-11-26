import PropTypes from 'prop-types';
import React from 'react';

import Button from '../button';
import Marquee from '../marquee';
import Animate from '../animate';
import NewsCard from '../newsCard';

import './index.scss';

const NewsSection = props => {
    const {
        cta,
        title,
        divider,
        children,
    } = props;

    return (
        <div className='layout-grid'>
            <ul className='news-section-head'>
                <li>
                    <Animate>
                        <h2 className='heading-2'>{title}</h2>
                    </Animate>
                </li>
                <li>
                    <Marquee divider={divider} />
                </li>
                <li className='hide-on-mobile'>
                    <Animate delay={600}>
                        <Button
                            appearance='outline'
                            icon={{
                                type: 'icon-arrow-right',
                            }}
                            {...cta}
                        />
                    </Animate>
                </li>
            </ul>
            <NewsCard
                {...children}
            />
            <Button
                appearance='outline'
                className='show-on-mobile'
                icon={{
                    type: 'icon-arrow-right',
                }}
                {...cta}
            />
        </div>
    );
};

NewsSection.propTypes = {
    cta: PropTypes.object,
    title: PropTypes.any,
    divider: PropTypes.string,
    children: PropTypes.object,
};

export default NewsSection;
