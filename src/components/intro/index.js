import ScaleText from 'react-scale-text';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../button';
import Animate from '../animate';

import './index.scss';

const Intro = props => {
    const {
        cta,
        title,
        subTitle,
        dataFound,
        description,
        maxFontSize,
    } = props;

    const secondary = !!title && !subTitle;

    return (
        <div
            className={classNames(
                'intro-holder',
                {
                    nbr: !dataFound,
                    secondary,
                }
            )}
        >
            <div className='intro-container'>
                <div className='intro-background absolute-splash' />
                <div className='guide'>
                    <div className='intro-contents'>
                        {!!title && (
                            <Animate
                                fit
                                delay={400}
                            >
                                <ScaleText
                                    minFontSize={secondary ? 36 : 48}
                                    maxFontSize={secondary ? maxFontSize : 48}
                                >
                                    <h1>{title}</h1>
                                </ScaleText>
                            </Animate>
                        )}
                        {!!subTitle && (
                            <Animate delay={600}>
                                <h2>{subTitle}</h2>
                            </Animate>
                        )}
                        {!!description && (
                            <Animate delay={800}>
                                <h2>{description}</h2>
                            </Animate>
                        )}
                        {!!cta && (
                            <Animate
                                fit
                                delay={800}
                                animation='fadeInUp'
                            >
                                <Button
                                    icon={{
                                        type: 'icon-arrow-right',
                                    }}
                                    {...cta}
                                />
                            </Animate>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    cta: PropTypes.object,
    title: PropTypes.any,
    subTitle: PropTypes.any,
    dataFound: PropTypes.bool,
    maxFontSize: PropTypes.number,
    description: PropTypes.any,
};

export default Intro;
