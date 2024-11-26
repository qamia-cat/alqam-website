import { InView } from 'react-intersection-observer';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';

const Animate = props => {
    const {
        fit,
        delay,
        animate,
        children,
        infinite,
        animation,
        className,
        forceAnimate,
    } = props;

    return animate ? (
        <InView
            threshold={0.5}
            triggerOnce={!infinite}
        >
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={classnames(
                        `animated-holder`,
                        `a-${animation}`,
                        className,
                        {
                            fit,
                            'animate': forceAnimate || inView,
                        }
                    )}
                    style={{
                        animationDelay: `${delay}ms`,
                    }}
                >
                    {children}
                </div>
            )}
        </InView>
    ) : (
        children
    );
};

Animate.defaultProps = {
    delay: 0,
    animate: true,
    infinite: false,
    animation: 'fadeIn',
    forceAnimate: false,
};

Animate.propTypes = {
    fit: PropTypes.bool,
    delay: PropTypes.number,
    animate: PropTypes.bool,
    children: PropTypes.node,
    animation: PropTypes.oneOf([
        'fadeInUp',
        'fadeIn',
        'bounceIn',
    ]),
    infinite: PropTypes.bool,
    className: PropTypes.string,
    forceAnimate: PropTypes.bool
};

export default Animate;
