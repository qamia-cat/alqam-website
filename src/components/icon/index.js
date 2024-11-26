import { conditionalSpread, rem } from 'clyne-core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Loader from './media/loader.svg';

import './index.scss';

const Icon = props => {
    const {
        type,
        size,
        className,
    } = props;

    return (
        <i
            className={classNames(
                `icon`,
                type,
                className,
            )}
            style={conditionalSpread({
                '--size': `var(--icon-external-size, ${rem(size)})`,
            }, size)}
        >
            {type === 'icon-loader' && (
                <Loader />
            )}
        </i>
    );
};

Icon.propTypes = {
    type: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.string,
};

export default Icon;
