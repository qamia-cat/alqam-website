import { isExternalURL, toProps } from 'clyne-core';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React from 'react';

const To = props => {
    const {
        title,
        style,
        target,
        onClick,
        children,
        url = '/',
        className,
    } = props;

    const handleClick = e => {
        !!onClick && onClick(e);
    };

    return isExternalURL(url) ? (
        <a
            href={url}
            style={style}
            title={title}
            target={target}
            onClick={handleClick}
            className={className}
        >
            {children}
        </a>
    ) : (
        <Link
            to={url}
            style={style}
            title={title}
            target={target}
            onClick={handleClick}
            className={className}
        >
            {children}
        </Link>
    );
};

To.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    style: PropTypes.object,
    target: PropTypes.oneOf(toProps.target),
    onClick: PropTypes.func,
    children: PropTypes.any,
    className: PropTypes.string,
};

export default To;
