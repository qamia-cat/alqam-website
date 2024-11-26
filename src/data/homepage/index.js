import scrollTo from 'gatsby-plugin-smoothscroll';
import { conditionalSpread } from 'clyne-core';
import React from 'react';

import news from '../news';
import services from '../services';

import { contactBlockId } from '../../helpers';

import CdlLogo from './media/cdl.svg';
// import NxtLogo from './media/nxt.svg';
import Aramco from './media/aramco.svg';
import SharjahLogo from './media/sharjah.svg';
import SrtipLogo from './media/srtiplogo.svg';


const homepage = {
    intro: {
        title: 'Quantum Technology Solutions Now',
        subTitle: (
            <>
                We focus on creating efficient,<br />
                mathematically-inspired AI & Quantum Technology solutions
            </>
        ),
        description: 'Ready today, for tomorrow’s world',
        cta: {
            to: 'contactUs',
            children: 'Contact Us',
            onClick: () => scrollTo(`#${contactBlockId}`),
        },
    },
    cardsGroup: {
        title: (
            <>
                Harness the power of mathematics and<br />
                quantum mechanics to transform your world
            </>
        ),
        children: services,
    },
    divider: {},
    logoMarks: {
        title: (
            <>
                Our <br />
                Partners
                <br />
            </>
        ),
        children: [
            {
                logo: <SharjahLogo />,
                ratio: [1, 1],
                title: 'University of Sharjah',
                url: 'https://www.sharjah.ac.ae/',
            },
            {
                logo: <Aramco />,
                ratio: [1, 0.9],
                title: 'Saudi Aramco',
                url: 'https://europe.aramco.com/',
            },
            {
                logo: <SrtipLogo />,
                ratio: [1, 0.8],
                title: 'SRTIP',
                url: 'https://srtip.ae/',
            },
            // {
            //     logo: <NxtLogo />,
            //     ratio: [1.1, 1],
            //     title: 'NXT Energy Solutions Inc.',
            //     url: 'https://www5.nxtenergy.com/',
            // },
            {
                logo: <CdlLogo />,
                ratio: [1.25, 1],
                title: 'Creative Destruction Lab',
                url: 'https://creativedestructionlab.com/streams/quantum/',
            },
        ],
    },
    divider1: {},
    quote: {
        children: (
            <>
                At Qamia, we are pioneering the future of <br />
                Quantum technologies in the UAE and beyond.
            </>
        ),
        cta: {
            url: `/about-us`,
            children: 'About Us',
        },
    },
    ...conditionalSpread({
        divider2: {},
        newsSection: {
            title: 'Latest News',
            divider: ' ',
            children: news?.list?.[0],
            cta: {
                url: `/news`,
                children: 'See All News',
            },
        },
    }, !!news?.list?.length),
};

export default homepage;
