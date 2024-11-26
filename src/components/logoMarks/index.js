import PropTypes from 'prop-types';
import React from 'react';

import To from '../to';
import Animate from '../animate';

import './index.scss';

const LogoMarks = props => {
    const {
        title,
        children,
    } = props;

    return (
        <div className='logo-marks-holder'>
            <Animate fit>
                <h2 className='heading-2 s-big'>
                    {title}
                </h2>
            </Animate>
            <Animate>
                <div className='logo-marks-contents'>
                    {children.map(item => (
                        <To
                            key={item.url}
                            url={item.url}
                            target='_blank'
                            title={item.title}
                            style={{
                                '--aspect-ratio': item.ratio.join(' / '),
                            }}
                        >
                            {item.logo}
                        </To>
                    ))}
                </div>
            </Animate>
        </div>
    );
};

LogoMarks.propTypes = {
    title: PropTypes.any,
    children: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        logo: PropTypes.any,
        title: PropTypes.string,
    })),
};

export default LogoMarks;
