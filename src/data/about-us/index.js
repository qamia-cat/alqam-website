import React from 'react';

import jesseBerwald from './media/jesseBerwald.jpg';
import jesseBerwald2x from './media/jesseBerwald@2x.jpg';
import johnDexheimer from './media/johnDexheimer.jpg';
import johnDexheimer2x from './media/johnDexheimer@2x.jpg';
import nicholasChancellor from './media/nicholasChancellor.jpg';
import nicholasChancellor2x from './media/nicholasChancellor@2x.jpg';
import raoufDridi from './media/raoufDridi.jpg';
import raoufDridi2x from './media/raoufDridi@2x.jpg';
import rifatHamoudi from './media/rifatHamoudi.jpg';
import rifatHamoudi2x from './media/rifatHamoudi@2x.jpg';

const aboutUs = {
    intro: {
        title: 'About Us',
    },
    subIntro: {
        children: (
            <>
                Partner with us to solve your most challenging problems.<br />
                We are passionate about using our expertise to make a positive impact on the world. We invite you to join us to solve the world’s most challenging problems and shape the future of technology.
            </>
        ),
    },
    // defines a component
    peopleSection: { 
        children: [
            {
                image: [
                    raoufDridi,
                    raoufDridi2x,
                ],
                title: 'Raouf Dridi',
                subTitle: 'PhD - CoFounder & CEO',
                social: [
                    {
                        icon: 'icon-linkedin-filled',
                        url: 'https://www.linkedin.com/in/raouf-dridi/',
                    },
                ],
                children: 'With a PhD in Mathematics, Raouf has spent decades at the forefront of advanced technology. His professional journey includes distinguished roles such as the Advanced Technology Team Leader at Quantum Computing Inc., and Quantum Machine Learning and Optimization Lead at 1Qbit. He holds multiple patents in the quantum computing space. As an academic contributor, Raouf co-founded the quantum computing group at Carnegie Mellon University, and helped push the boundaries of quantum and classical computing algorithms. In his role at Qamia, Raouf brings his extensive experience and passion for disruptive technologies to guide the company\'s direction in quantum algorithms and applications.',
            },
            {
                image: [
                    jesseBerwald,
                    jesseBerwald2x,
                ],
                title: 'Jesse Berwald',
                subTitle: 'PhD - CoFounder & CTO',
                social: [
                    {
                        icon: 'icon-linkedin-filled',
                        url: 'https://www.linkedin.com/in/jesse-berwald/',
                    },
                ],
                children: 'Jesse has spent over a decade as a technology leader in diverse roles. A deeply technical generalist, in his professional life he has held positions as a data scientist in retail, a senior consultant at D-Wave Systems, and a Principal Quantum Software Architect at Quantum Computing, Inc. He holds multiple patents across a number of technology spaces. He focuses on building robust technology and strong relationships with partners and within his teams. Jesse brings his passion for creating disruptive technology to guide the company’s technological path in his role as CTO at Qamia.',
            },
        ],
    },
    peopleSection1: {
        title: 'Advisors',
        divider: '#advisors',
        children: [
            {
                image: [
                    johnDexheimer,
                    johnDexheimer2x,
                ],
                title: 'John Dexheimer',
                subTitle: 'Lightwave Advisors, LLC',
                social: [
                    {
                        icon: 'icon-linkedin-filled',
                        url: 'https://www.linkedin.com/in/john-dexheimer-53101a6/',
                    },
                ],
                children: 'John has advised on over 100 completed company financings and mergers in software, communications, electronics and materials. He has extensive history with venture capital investing as a co-investor and advisor on portfolio firms of many of the well know, active investors in technology sectors. He has helped found startups and has a record of initiating and structuring successful private investments for affiliated equity funds. He earned an MBA from Harvard University and a B.S. from the University of Minnesota, College of Science and Engineering where he is on the Dean’s Advisory. He has been an Entrepreneur-in-Residence at Yale, on the Advisory board of the NSF IMA and the NSF ERC.',
            },
            {
                image: [
                    rifatHamoudi,
                    rifatHamoudi2x,
                ],
                title: 'Rifat Hamoudi',
                subTitle: 'PhD, Prof, University of Sharjah',
                social: [
                    {
                        icon: 'icon-user',
                        url: 'https://www.sharjah.ac.ae/en/academics/Colleges/Medicine/dept/dcs/Pages/ppl_detail.aspx?mcid=18',
                   }

                ],
                children: 'Dr. Hamoudi is currently the director of the Centre of Excellence for Precision Medicine at the University of Sharjah. He is an interdisciplinary researcher with a deep background and experience that spans the fields of Medicine, Engineering and Computer Science. He has three different MSc degrees from the University of London in Biochemistry & Molecular Biology, Electronics and Information Engineering and Computer Science respectively. He has a PhD from University of Cambridge in Pathology and Immunology.',
            },
            {
                image: [
                    nicholasChancellor,
                    nicholasChancellor2x,
                ],
                title: 'Nicholas Chancellor',
                subTitle: 'PhD, Newcastle University',
                social: [
                    {
                        icon: 'icon-linkedin-filled',
                        url: 'https://www.linkedin.com/in/nick-chancellor-55243718/',
                    },
                ],
                children: 'Dr. Nicholas Chancellor is a world renowned expert in quantum computing and assistant professor at Newcastle University within the School of Computing. His research interests extend from theoretical physics to applications of quantum computing for industrial problems. His work has directly influenced the development of novel hardware and software at various companies. He has been on the program committee of a number of conferences including being the chair of the program committee for AQC \'24, and has served on a number of editorial boards of well respected journals. Additionally, Dr. Chancellor has consulted for both industry and national labs including his expertise being tapped by the UK Defense Science and Technology lab through the Pathfinder project.',
            },
        ],
    },
};

export default aboutUs;
