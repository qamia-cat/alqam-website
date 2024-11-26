import PropTypes from 'prop-types';
import React from 'react';

import Animate from '../animate';

import './index.scss';

const SubIntro = props => {
    const {
        children,
    } = props;

    return (
        <Animate>
            <div className='sub-intro-holder'>
                {children}
            </div>
        </Animate>
    );
};

SubIntro.propTypes = {
    children: PropTypes.any,
};

export default SubIntro;
