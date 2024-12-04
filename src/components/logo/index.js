import PropTypes from 'prop-types';
import React from 'react';

import To from '../to';

import './index.scss';

const Logo = props => {
    const {
        height = 180,
        // width = 200,
        variant = 'secondary',
    } = props;

    // const colors = {
    //     main: variant === 'secondary' ? '#E6EDDE' : '#2E5B41',
    //     contrast: variant === 'secondary' ? '#011810' : '#ffffff',
    //     secondary: variant === 'secondary' ? '#011810' : '#022E2B',
    // };

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
            viewBox="0 0 250 250"
            xmlns='http://www.w3.org/2000/svg'
    >
  <g
     id="layer1"
     transform="translate(-1.94375,-40.029173)">
    <g
       id="g19"
       transform="matrix(0.26458333,0,0,0.26458333,-54.1655,350.63642)">
      <linearGradient
         id="linearGradient1"
         gradientUnits="userSpaceOnUse"
         x1="495.1236"
         y1="-1011.8262"
         x2="811.25989"
         y2="-695.68982">
        <stop
           offset="0"
           stopColor="#89AF59"
           id="stop1" />
        <stop
           offset="0.9989"
           stopColor="#004B4A"
           id="stop2" />
      </linearGradient>
      <path
         fill='url(#linearGradient1)'
         d="m 765.24,-839.42 h -69.62 c -15.09,0 -29.48,-4.61 -41.55,-13.15 8.65,12.16 13.46,26.92 13.46,41.94 v 68.92 c 0,3.27 2.66,5.94 5.94,5.94 h 91.77 c 3.27,0 5.94,-2.66 5.94,-5.94 v -91.77 c 0,-3.28 -2.66,-5.94 -5.94,-5.94 z"
         id="path17" />
      <linearGradient
         id="linearGradient2"
         gradientUnits="userSpaceOnUse"
         x1="495.12811"
         y1="-1011.8307"
         x2="811.26453"
         y2="-695.69427">
        <stop
           offset="0"
           stopColor="#89AF59"
           id="stop3" />
        <stop
           offset="0.9989"
           stopColor="#004B4A"
           id="stop4" />
      </linearGradient>
      <path
         fill='url(#linearGradient2)'
         d="m 783.94,-871.71 h -82.52 c -27.58,0 -54.03,-10.95 -73.53,-30.46 l -4.24,-4.24 c -19.5,-19.5 -30.46,-45.95 -30.46,-73.53 v -82.52 c 0,-11.47 -9.3,-20.78 -20.78,-20.78 H 444.5 c -11.47,0 -20.78,9.3 -20.78,20.78 v 127.91 c 0,11.47 9.3,20.78 20.78,20.78 h 82.52 c 27.58,0 54.03,10.95 73.53,30.46 l 4.24,4.24 c 19.5,19.5 30.46,45.95 30.46,73.53 v 82.52 c 0,11.47 9.3,20.78 20.78,20.78 h 127.91 c 11.48,0 20.78,-9.3 20.78,-20.78 v -127.91 c -0.01,-11.48 -9.31,-20.78 -20.78,-20.78 z M 779,-738.57 c 0,5.86 -4.75,10.61 -10.61,10.61 h -97.26 c -5.86,0 -10.61,-4.75 -10.61,-10.61 v -73.04 c 0,-19.19 -7.65,-37.59 -21.25,-51.13 l -56.55,-57.35 c -13.31,-13.25 -31.33,-20.69 -50.11,-20.69 h -72.66 c -5.77,0 -10.45,-4.68 -10.45,-10.45 v -95.79 c 0,-5.77 4.68,-10.45 10.45,-10.45 h 95.79 c 5.77,0 10.45,4.68 10.45,10.45 v 71.93 c 0,18.9 7.53,37.02 20.93,50.35 l 56.62,57.28 c 13.52,13.45 31.81,21.01 50.89,21.01 h 73.78 c 5.86,0 10.61,4.75 10.61,10.61 v 97.27 z"
         id="path19" />
    </g>
  </g>
  </svg>
      </To>
    );
};

Logo.propTypes = {
    height: PropTypes.number,
    variant: PropTypes.oneOf(['original', 'secondary']),
};

export default Logo;
