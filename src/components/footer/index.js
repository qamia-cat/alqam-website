import React from 'react';

import Logo from '../logo';
import Divider from '../divider';
import Animate from '../animate';

import './index.scss';

const Footer = () => {
    return (
        <footer>
            <Divider />
            <div className='footer-contents'>
                <Animate fit>
                    <Logo
                        height={36}
                        variant='original'
                    />
                </Animate>
                <Animate
                    fit
                    delay={200}
                >
                    <p>Copyright © Qamia {new Date().getFullYear()} All rights reserved.</p>
                </Animate>
            </div>
        </footer>
    );
};

export default Footer;
