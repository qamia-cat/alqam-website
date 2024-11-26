import { InView } from 'react-intersection-observer';
import classnames from 'classnames';
import React from 'react';

import './index.scss';

const Divider = () => {
    return (
        <InView
            triggerOnce
            threshold={1}
        >
            {({ inView, ref }) => (
                <hr
                    ref={ref}
                    className={classnames(
                        {
                            active: inView,
                        }
                    )}
                />
            )}
        </InView>
    );
};

export default Divider;
