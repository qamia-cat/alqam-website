import React from 'react';

import Intro from '../intro';
import Footer from '../footer';
import Header from '../header';
import Divider from '../divider';
import LetsGetInTouch from '../letsGetInTouch';
import ContentRenderer from '../contentRenderer';

import useContent from '../../hooks/useContent';

import { notFoundIntro } from '../../data/shared';

import '../../assets/scss/main.scss';

const Layout = () => {
    const {
        intro,
        ...data
    } = useContent();

    const dataFound = !!Object.keys(data).length;

    return (
        <>
            <Header />
            <main className='layout-grid'>
                <Intro
                    title={data?.title}
                    dataFound={dataFound}
                    maxFontSize={data?.title ? 48 : 80}
                    {...((dataFound ? intro : notFoundIntro) || {})}
                />
                {!!dataFound && (
                    <div className='guide layout-grid'>
                        <ContentRenderer
                            data={data}
                        />
                        <Divider />
                        <LetsGetInTouch />
                        <Footer />
                    </div>
                )}
            </main>
        </>
    );
};

export default Layout;
