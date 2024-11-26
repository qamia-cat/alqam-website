import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import To from '../to';

import './index.scss';

const Card = props => {
    const {
        url,
        children,
        hoverTransform = true,
    } = props;

    return (
        <div
            className={classNames(
                'card-holder',
                {
                    hoverTransform,
                    'clickable btn-hover-trigger': url,
                }
            )}
        >
            {children}
            {!!url && (
                <To url={url} className='absolute-splash' />
            )}
        </div>
    );
};

Card.propTypes = {
    url: PropTypes.string,
    children: PropTypes.any,
    hoverTransform: PropTypes.bool,
};

export default Card;
