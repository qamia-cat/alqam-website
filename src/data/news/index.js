import React from 'react';

import srtipImage from './media/srtiplogo.png';
import srtipPool from './media/srtip-pool.jpg';
import seismicImage from './media/seismic.jpg';
import networkSec from './media/network-security.jpg';


const news = {
    intro: {
        title: 'News',
    },
    list: [
        {
            image: srtipPool,
            slug: 'pqc-workshop',
            title: 'Qamia organizing PQC workshop at Sharjah Research Technology and Innovation Park',
            // abstract that gets picked up and displayed on homepage
            card: 'Qamia-SRTIP will host a joint workshop on post-quantum cryptography in November, 2024. More details to follow soon!',
            article: {
                children: (
                    <>
                        <h1>Qamia organizing PQC workshop at Sharjah Research Technology and Innovation Park</h1>
                        <img src={srtipImage} alt='' />
                        <p>Qamia-SRTIP will host a joint workshop on post-quantum cryptography in November, 2024. The goal of the workshop is to raise awareness about the importance of proactive measures in protecting organizations (businesses, government agencies, etc.) against quantum threats. Further details to follow soon.</p>
                    </>
                ),
            },
        },
        {
            image: networkSec,
            slug: 'pqc-lab',
            title: 'Qamia to lead joint PQC lab at University of Sharjah',
            // abstract that gets picked up and displayed on homepage
            card: 'Qamia and researchers at the University of Sharjah secure 3 year grant of 8M AED to collaborate on post-quantum cryptography and quantum networking.',
            article: {
                children: (
                    <>
                        <h1>Qamia to lead joint PQC research at University of Sharjah</h1>
                        <p>Qamia and researchers at the University of Sharjah have secured a 3 year grant for 8M AED ($2.2M) to collaborate on post-quantum cryptography. The grant, issued through the office of HH Sheikh Sultan bin Ahmed Al Qasimi, will support development of quantum networking hardware and software, research associates in the areas of PQC and quantum networking, and technology transfer.</p>
                    </>
                ),
            },
        },
        {
            image: seismicImage,
            slug: 'aramco-lot',
            title: 'Qamia and Aramco sign letter of intent',
            // abstract that gets picked up and displayed on homepage
            card: 'Aramco and Qamia have signed a letter of intent to utilize Fenneq, Qamia’s flagship hybrid algorithm',
            article: {
                children: (
                    <>
                        <h1>Qamia and Aramco sign letter of intent</h1>
                        <p>Aramco and Qamia have signed a letter of intent to utilize Fenneq, Qamia’s flagship hybrid algorithm, to solve computationally difficult problems in the oil & gas space. Aramco has been at the forefront of quantum computing research, and Qamia is excited to help them continue to push the boundaries of computation.</p>
                    </>
                ),
            },
        },
    ],
};

export default news;
