import React from 'react';


const services = [
    {
        icon: 'icon-processor',
        slug: 'ai-and-quantum-technology',
        title: (
            <>
                FENNEQ - Hybrid Quantum Computing{` `}<br />
                Done Right
            </>
        ),
        card: 'Fenneq is our flagship product that solves industry-scale optimization problems in a hybrid quantum computing framework. Combining advanced machine learning with the largest QPUs available, Fenneq is capable of solving problems 20x larger than conventional hybrid methods. Additionally, the proprietary algorithms behind Fenneq enable us to solve a much wider range of problems. Talk to us today about solving your optimization problem!',
        /*article: {
            children: (
                <>
                    <p>Our cutting-edge solutions focus on efficiency and decarbonization efforts in the
                     oil & gas industry through novel AI applications and improved accuracy wherever sensors
                      are used.</p>
                </>
            ),
        },*/
    },
    // {
    //     icon: 'icon-clipboard-plus',
    //     slug: 'precision-medicine-diagnostics',
    //     title: (
    //         <>
    //             Precision Medicine{` `}<br />
    //             & Diagnostics
    //         </>
    //     ),
    //     card: 'We specialize in AI solutions for disease detection and diagnosis in precision medicine, utilizing pinpoint application of AI and research into quantum sensors we are breaking new ground in the biomedical sciences.',
        /*article: {
            children: (
                <>
                    <p>We specialize in AI solutions for disease detection and diagnosis in precision medicine, utilizing pinpoint application of AI and research into quantum sensors we are breaking new ground in the biomedical sciences.</p>
                </>
            ),
        },*/
    // },
    {
        icon: 'icon-shield-check',
        slug: 'post-quantum-encryption',
        title: (
            <>
                QASER - Post-Quantum{` `}
                Cryptography Solutions
            </>
        ),
        card: (
            <>
                Our Qaser ('kasseer', كاسر) library is designed to keep your network and data safe. Migrating to the post-quantum era can be daunting. We help you understand your network’s unique vulnerabilities, provide ready-to-deploy quantum-secure software libraries , and assist in transitioning your target systems to a quantum-secure state. Our core product, Qaser, is built around NIST's Cyber Security Framework to guarantee the best security available. Contact us to upgrade to a quantum-safe network!
            </>
        ),
        /*article: {
            children: (
                <>
                    <p>We bring understanding and awareness, as well as unparalleled discretion, to help businesses through a difficult transition.</p>
                </>
            ),
        },*/
    },
].map(item => ({
    ...item,
    parent: 'services',
}));

export default services;
