import PropTypes from 'prop-types';
import React from 'react';

import Button from '../button';
import Animate from '../animate';

import QuoteMark from './media/quoteMark.svg';

import './index.scss';

const Quote = props => {
    const {
        cta,
        children,
    } = props;

    return (
        <ul className='quote-holder'>
            <li>
                <Animate fit>
                    <QuoteMark />
                </Animate>
            </li>
            <li>
                <Animate delay={200}>
                    {children}
                </Animate>
            </li>
            {!!cta && (
                <li>
                    <Animate delay={400}>
                        <Button
                            appearance='sc-light'
                            icon={{
                                type: 'icon-arrow-right',
                            }}
                            {...cta}
                        />
                    </Animate>
                </li>
            )}
        </ul>
    );
};

Quote.propTypes = {
    cta: PropTypes.object,
    children: PropTypes.any,
};

export default Quote;
