import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Card from '../card';
import Icon from '../icon';
import Button from '../button';
import Animate from '../animate';

import { servicesBlockId } from '../../helpers';

import './index.scss';

const CardsGroup = props => {
    const {
        title,
        children,
    } = props;

    return (
        <div
            id={servicesBlockId}
            className='layout-grid'
        >
            <Animate>
                <h2 className='heading-2'>{title}</h2>
            </Animate>
            <ul
                className={classNames(
                    'cards-group-grid',
                    `items-${children?.length || 1}`,
                )}
            >
                {children?.map((item, index) => {
                    const url = item.article ? ['', item.parent, item.slug].join('/') : '';

                    return (
                        <li key={index}>
                            <Card url={url}>
                                <div className='card-item-holder'>
                                    <div className='card-item-headings'>
                                        <Animate
                                            fit
                                            delay={200}
                                        >
                                            <Icon
                                                size={48}
                                                type={item.icon}
                                            />
                                        </Animate>
                                        <Animate
                                            fit
                                            delay={300}
                                        >
                                            <h4>{item.title}</h4>
                                        </Animate>
                                    </div>
                                    <div>
                                        <Animate
                                            delay={400}
                                        >
                                            {item.card}
                                        </Animate>
                                    </div>
                                    {!!url && (
                                        <div>
                                            <Animate
                                                delay={500}
                                            >
                                                <Button
                                                    url={url}
                                                    appearance='inline'
                                                    icon={{
                                                        size: 20,
                                                        type: 'icon-arrow-right',
                                                    }}
                                                >
                                                    Learn more
                                                </Button>
                                            </Animate>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

CardsGroup.propTypes = {
    title: PropTypes.any,
    children: PropTypes.arrayOf(PropTypes.shape({
        slug: PropTypes.string,
        icon: PropTypes.string,
        card: PropTypes.any,
        title: PropTypes.any,
        parent: PropTypes.string,
    })),
};

export default CardsGroup;
