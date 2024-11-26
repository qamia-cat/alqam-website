import PropTypes from 'prop-types';
import React from 'react';

import To from '../to';

import './index.scss';

const Logo = props => {
    const {
        height = 56,
        variant = 'secondary',
    } = props;

    const colors = {
        main: variant === 'secondary' ? '#E6EDDE' : '#2E5B41',
        contrast: variant === 'secondary' ? '#011810' : '#ffffff',
        secondary: variant === 'secondary' ? '#011810' : '#022E2B',
    };

    return (
        <To
            url='/'
            className='logo-holder'
        >
            <svg
                style={{
                    height,
                    width: 'auto',
                }}
                viewBox='0 0 121.9 37'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fill={colors.main}
                    d='M92.15,9.13h5.26v19.37h-5.26V9.13ZM121.91,28.5h-5.67l-1.12-3.71h-6.39l-1.12,3.71h-5.68l6.4-19.37h7.19l6.39,19.37ZM113.92,20.86l-1.93-6.4h-.15l-1.93,6.4h4.01ZM16.96,0c-.14.18-2.63,3.48-2.63,3.48,0,0,1.83,2.01,2.63,2.87,4.88.01,8.98,3.33,10.18,7.83.08.58.11,1.32-.1,1.79-.26.59-.71,1.17-1.67,1.38l.02-.03c-.26-.2.17-1.21.5-1.8l-.14-.08c-.09.16-.83,1.5-.52,1.94-.18.03-.36.06-.57.06h-.06l.02-.02c-.26-.2.17-1.21.5-1.8l-.14-.08c-.09.15-.78,1.41-.55,1.89-1.18-.15-2.17-1.73-2.17-1.73,0,0-.18.49-.29,1.14-.11.66.12,1.16.12,1.16,0,0-.76.54-1.04,1.27-.28.73-.22,1.31-.22,1.31,0,0-.17.07-.75.13s-1.31-.22-1.31-.22c0,0,.38.84.77,1.27.35.37,1.19,1.15,2.1,1.7-.3.48-.51,1.23-.54,1.35l.15.04c.11-.41.31-.96.52-1.31.08.04.16.09.24.13.09.05.19.09.3.14-.4.4-.69,1.45-.73,1.6l.15.04c.15-.55.45-1.36.74-1.58.64.25,1.5.48,2.14.64-.37.5-1.14,1.44-2.49,2.53-.45.37-1.11.55-.74,1.1s1.47.37,2.76-.18c1.28-.55,2.39-1.65,2.39-1.65,0,0,.5,1.08-1.11,2.39-.71.58-2.49,1.13-2.21,1.83.37.92,1.47.74,3.31-.17,1.77-.88,4.2-3.69,4.2-3.69,1.94-2.75,3.09-6.09,3.1-9.71C33.84,7.62,26.3.03,16.96,0ZM53.74,9.13l6.4,19.37h-5.68l-1.12-3.71h-6.39l-1.12,3.71h-5.68l6.4-19.37h7.19ZM52.15,20.86l-1.93-6.4h-.15l-1.93,6.4h4.01ZM75.95,20.1h-.23l-4.5-10.97h-6.54v19.37h5.15v-11.28h.15l4.31,11.13h3.1l4.31-11.05h.15v11.2h5.15V9.13h-6.55l-4.5,10.97Z'
                />
                <path
                    fill={colors.contrast}
                    d='M24.92,18.39c.31.33.27.88-.1,1.23s-.92.36-1.24.03-.27-.88.1-1.23.92-.36,1.24-.03ZM23.63,18.84c-.14.32.19.78.36.85.35.14.73.01.87-.3s-.1-.8-.36-.85c-.37-.08-.73-.01-.87.3ZM23.04,21.08c.41.21.55.74.32,1.19s-.74.65-1.15.45-.55-.74-.32-1.19.74-.65,1.15-.45ZM22.35,21.28c-.37.17-.54.6-.37.97s.53.37.9.2.61-.43.44-.8c-.08-.17-.6-.54-.97-.37Z'
                />
                <path
                    fill={colors.secondary}
                    d='M31.96,34.9c-.73-.28-1.08.28-2.48.31-1.66.03-2.24-.16-3.34-.71s-2.2-1.95-2.93-2.68-1.65-1.29-2.57-1.66c-.92-.37-2.76-.38-3.86-.38s-.92-.19-.92-.37,1.1-.18,2.21-.18,1.84-.36,2.02-.73.05-.8-.18-.92c-.37-.18-3.03-.1-3.03-.1-5.83-.02-10.55-4.76-10.53-10.59,0,0,0,0,0-.01.02-5.84,4.76-10.55,10.6-10.53h.07V0h-.05C7.62-.03.03,7.52,0,16.86c-.03,9.34,7.52,16.93,16.86,16.96,3.22,0,3.22-.36,3.22-.91,0-.18-.18-.37-.55-.55-.37-.18-2.2-.37-2.76-.38-.55,0-1.29,0-1.29-.19,0-.18-.18-.37,1.47-.36,1.65.01,2.83.06,3.93.79,1.1.73,1.91,1.88,3.16,3.01,1.35,1.21,3.19,1.77,5.03,1.77s2.49-.24,2.98-.53c.79-.47.52-1.33-.1-1.57h0Z'
                />
            </svg>
        </To>
    );
};

Logo.propTypes = {
    height: PropTypes.number,
    variant: PropTypes.oneOf(['original', 'secondary']),
};

export default Logo;