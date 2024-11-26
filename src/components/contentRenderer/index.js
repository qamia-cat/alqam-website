import PropTypes from 'prop-types';
import React from 'react';

import List from '../list';
import Quote from '../quote';
import Image from '../image';
import Article from '../article';
import Divider from '../divider';
import SubIntro from '../subIntro';
import LogoMarks from '../logoMarks';
import CardsGroup from '../cardsGroup';
import NewsSection from '../newsSection';
import PeopleSection from '../peopleSection';

const ContentRenderer = props => {
    const {
        data,
    } = props;

    return Object.keys(data).map(key => {
        const props = {
            key: key,
            ...data[key],
        };

        switch (key.replace(/[0-9]/g, '')) {
            case 'cardsGroup':
                return (
                    <CardsGroup {...props} />
                );
            case 'logoMarks':
                return (
                    <LogoMarks {...props} />
                );
            case 'newsSection':
                return (
                    <NewsSection {...props} />
                );
            case 'peopleSection':
                return (
                    <PeopleSection {...props} />
                );
            case 'quote':
                return (
                    <Quote {...props} />
                );
            case 'subIntro':
                return (
                    <SubIntro {...props} />
                );
            case 'divider':
                return (
                    <Divider {...props} />
                );
            case 'list':
                return (
                    <List
                        key={key}
                        data={data.list}
                    />
                );
            case 'article':
                return (
                    <Article {...props} />
                );
            case 'image':
                return (
                    <Image
                        key={key}
                        source={data.image}
                    />
                );
            default:
                return null;
        }
    });
};

ContentRenderer.propTypes = {
    data: PropTypes.object,
};

export default ContentRenderer;
