import PropTypes from 'prop-types';
import React from 'react';

import Animate from '../animate';

import './index.scss';

const Image = props => {
    const {
        source,
    } = props;

    return (
        <Animate>
            <div className='image-component-holder'>
                <img
                    alt=''
                    src={source}
                />
            </div>
        </Animate>
    );
};

Image.propTypes = {
    source: PropTypes.string,
};

export default Image;
