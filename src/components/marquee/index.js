import { fakeArray } from 'clyne-core';
import PropTypes from 'prop-types';
import React from 'react';

import Animate from '../animate';

import './index.scss';

const Marquee = props => {
    const {
        divider,
    } = props;

    return (
        <ul className='marquee-holder'>
            <li>
                <div>{divider}</div>
            </li>
            <li className='absolute-splash'>
                {fakeArray(20).map((item, index) => (
                    <Animate
                        fit
                        key={item}
                        delay={index * 50}
                        animation='fadeInUp'
                    >
                        {divider}
                    </Animate>
                ))}
            </li>
        </ul>
    );
};

Marquee.propTypes = {
    divider: PropTypes.string,
};

export default Marquee;
