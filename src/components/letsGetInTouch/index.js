import React from 'react';

import To from '../to';
import Icon from '../icon';
import Animate from '../animate';
import ContactForm from '../contactForm';

import { letsGetInTouch } from '../../data/shared';

import { contactBlockId } from '../../helpers';

import './index.scss';

const LetsGetInTouch = () => {
    return (
        <ul
            id={contactBlockId}
            className='lets-get-in-touch-holder'
        >
            <li>
                <Animate>
                    <h2 className='heading-2 s-big'>{letsGetInTouch.title}</h2>
                </Animate>
            </li>
            <li>
                <Animate delay={200}>
                    <p>{letsGetInTouch.subTitle}</p>
                </Animate>
                <div className='lgit-contacts-holder'>
                    {letsGetInTouch.contacts.map((contact, index) => (
                        <Animate
                            key={contact.url}
                            delay={200 + (100 * index)}
                        >
                            <To
                                url={contact.url}
                                className='link-effect-hover-trigger'
                            >
                                <Icon
                                    type={contact.icon}
                                />
                                <span className='link-effect'>{contact.children}</span>
                            </To>
                        </Animate>
                    ))}
                </div>
            </li>
            <li>
                <ContactForm />
            </li>
        </ul>
    );
};

export default LetsGetInTouch;
