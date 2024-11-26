import { toProps } from 'clyne-core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import To from '../to';
import Icon from '../icon';

import './index.scss';

const Button = props => {
    const {
        url,
        icon,
        target,
        onClick,
        children,
        disabled,
        className,
        appearance = 'default',
    } = props;

    const sharedProps = {
        onClick,
        disabled,
        className: classNames(
            'btn',
            `a-${appearance}`,
            className,
            {
                disabled,
            }
        ),
    };

    const content = (
        <>
            <span>{children}</span>
            {!!icon && (
                <Icon
                    {...icon}
                />
            )}
        </>
    );

    return url ? (
        <To
            url={url}
            target={target}
            {...sharedProps}
        >
            {content}
        </To>
    ) : (
        <button
            {...sharedProps}
        >
            {content}
        </button>
    );
};

Button.propTypes = {
    url: PropTypes.string,
    icon: PropTypes.object,
    target: PropTypes.oneOf(toProps.target),
    onClick: PropTypes.func,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    appearance: PropTypes.oneOf([
        'default',
        'inline',
        'sc-light',
        'outline',
    ]),
};

export default Button;
