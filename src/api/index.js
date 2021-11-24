import queryString from 'query-string';
import config from './../config';

export const getUsers = (options = {}) => {
  // const { page, results, format, seed } = options;
  const defaultOptions = {
    page: 1,
    results: config.DEFAULT_AMOUNT,
    format: config.DEFAULT_FORMAT,
    seed: config.API_KEY,
    nat: '',
    inc: 'gender,name,login,nat',
  };
  const finalOptions = { ...defaultOptions, ...options };
  const query = queryString.stringify(finalOptions);
  console.log(query);

  return fetch(config.BASE_URL + query).then((response) => response.json());
};
