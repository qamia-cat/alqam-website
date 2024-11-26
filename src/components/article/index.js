import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';

const Article = props => {
    const {
        children,
    } = props;

    return (
        <div className='article-contents-holder'>
            {children}
        </div>
    );
};

Article.propTypes = {
    children: PropTypes.any,
};

export default Article;
