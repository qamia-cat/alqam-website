export const arrayChunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));

export const contactBlockId = 'letsGetInTouch';

export const servicesBlockId = 'services';
