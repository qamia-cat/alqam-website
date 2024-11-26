import PropTypes from 'prop-types';
import React from 'react';

import To from '../to';
import Card from '../card';
import Icon from '../icon';
import Marquee from '../marquee';
import Animate from '../animate';

import './index.scss';

const PeopleSection = props => {
    const {
        title,
        divider,
        children,
    } = props;

    return (
        <div className='layout-grid'>
            {!!title && (
                <ul className='people-section-head'>
                    <li>
                        <Marquee divider={divider} />
                    </li>
                    <li>
                        <Animate>
                            <h2 className='heading-2'>{title}</h2>
                        </Animate>
                    </li>
                    <li>
                        <Marquee divider={divider} />
                    </li>
                </ul>
            )}
            <div className='people-section-container'>
                {children.map(item => (
                    <Card key={item.title}>
                        <ul className='people-section-item'>
                            <li>
                                <Animate>
                                    <img
                                        alt={item.title}
                                        src={item.image[0]}
                                        srcSet={`${item.image[0]}, ${item.image[1]} 2x`}
                                    />
                                </Animate>
                            </li>
                            <li>
                                <div className='people-section-headings'>
                                    <Animate>
                                        <h4>{item.title}</h4>
                                    </Animate>
                                    <Animate delay={200}>
                                        <div className='people-section-meta'>
                                            <small>{item.subTitle}</small>
                                            {!!item.social?.length && (
                                                <div className='people-section-socials'>
                                                    {item.social.map(item => (
                                                        <To
                                                            key={item.url}
                                                            url={item.url}
                                                            target='_blank'
                                                        >
                                                            <Icon
                                                                type={item.icon}
                                                            />
                                                        </To>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Animate>
                                </div>
                                <div className='people-section-contents'>
                                    {item.children}
                                </div>
                            </li>
                        </ul>
                    </Card>
                ))}
            </div>
        </div>
    );
};

PeopleSection.propTypes = {
    title: PropTypes.string,
    divider: PropTypes.string,
    children: PropTypes.array,
};

export default PeopleSection;
