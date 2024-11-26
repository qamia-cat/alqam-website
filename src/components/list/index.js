import PropTypes from 'prop-types';
import React from 'react';

import NewsCard from '../newsCard';

const List = props => {
    const {
        data,
    } = props;

    return (
        <div className='layout-grid'>
            {data?.map(item => (
                <NewsCard
                    key={item.slug}
                    {...item}
                />
            ))}
        </div>
    );
};

List.propTypes = {
    data: PropTypes.array,
};

export default List;
