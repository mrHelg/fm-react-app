import queryString from 'query-string';

export const getUsers = (options = {}) => {
  const { page, res, ft } = options;
  const defaultOptions = {
    page: 1,
    res: 2,
    ft: 'json',
  };

  return fetch(
    `https://randomuser.me/api/?format=${ft}&results=${res}&page=${page}&seed=users`
  ).then((response) => response.json());
};
