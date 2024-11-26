import PropTypes from 'prop-types';
import React from 'react';

import Card from '../card';
import Button from '../button';
import Animate from '../animate';

import './index.scss';

const NewsCard = props => {
    const {
        card,
        slug,
        title,
        image,
    } = props;

    const url = `/news/${slug}`;

    return (
        <Card
            url={url}
            hoverTransform={false}
        >
            <div className='news-card-contents'>
                {!!image && (
                    <figure>
                        <Animate>
                            <img src={image} alt={title} />
                        </Animate>
                    </figure>
                )}
                <div className='news-card-info'>
                    <Animate delay={200}>
                        <h3 className='heading-3'>{title}</h3>
                    </Animate>
                    <Animate delay={300}>
                        <div className='news-card-description'>
                            {card}
                        </div>
                    </Animate>
                    <Animate delay={400}>
                        <Button
                            url={url}
                            appearance='inline'
                            icon={{
                                size: 20,
                                type: 'icon-arrow-right',
                            }}
                        >
                            Read more
                        </Button>
                    </Animate>
                </div>
            </div>
        </Card>
    );
};

NewsCard.propTypes = {
    card: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
};

export default NewsCard;
