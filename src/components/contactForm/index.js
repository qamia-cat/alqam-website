import { Collapse } from '@kunukn/react-collapse';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

import Icon from '../icon';
import Button from '../button';
import Animate from '../animate';

import './index.scss';

const ContactForm = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm();

    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = data => {
        setStatus('');
        setLoading(true);
        axios.post('https://api.hsforms.com/submissions/v3/integration/submit/46319809/9d3ea45c-29fc-4062-a7d6-2a09c5fbbb7d', {
            submittedAt: new Date().getTime(),
            fields: [
                ...Object.keys(data).map(name => ({
                    name,
                    value: data[name],
                }))
            ],
            context: {
                pageUri: document.location.href,
                pageName: document.title,
            },
        }).then(() => {
            reset();
            setStatus('success');
        }).catch(() => setStatus('error')).finally(() => setLoading(false));
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={classNames(
                'contact-us-form',
                {
                    loading,
                }
            )}
        >
            <Animate>
                <input
                    placeholder='Name'
                    className={classNames({
                        error: errors.firstname,
                    })}
                    {...register('firstname', {
                        required: true,
                    })}
                />
            </Animate>
            <Animate delay={200}>
                <input
                    type='email'
                    placeholder='Email'
                    className={classNames({
                        error: errors.email,
                    })}
                    {...register('email', {
                        required: true,
                    })}
                />
            </Animate>
            <Animate delay={300}>
                <input
                    type='tel'
                    placeholder='Phone'
                    className={classNames({
                        error: errors.phone,
                    })}
                    {...register('phone')}
                />
            </Animate>
            <div className='contact-us-sub'>
                <Animate delay={400}>
                    <textarea
                        placeholder='Message'
                        className={classNames({
                            error: errors.message,
                        })}
                        {...register('message', {
                            required: true,
                        })}
                    />
                </Animate>
                <Collapse isOpen={!!status}>
                    <div
                        className={classNames(
                            'cu-inline-message',
                            {
                                [`t-${status}`]: status,
                            }
                        )}
                    >
                        {status === 'error' ? 'Something went wrong, please try again later' : 'Thank you! We will get back to you as soon as possible!'}
                    </div>
                </Collapse>
            </div>
            <Animate delay={500}>
                <Button
                    disabled={!!Object.keys(errors || {}).length}
                    appearance='outline'
                    icon={{
                        type: 'icon-arrow-right',
                    }}
                >
                    Send
                </Button>
            </Animate>
            <div
                className={classNames(
                    'absolute-splash',
                    'loading-splash',
                    {
                        active: loading,
                    }
                )}
            >
                <Icon
                    size={36}
                    type='icon-loader'
                />
            </div>
        </form>
    );
};

export default ContactForm;
