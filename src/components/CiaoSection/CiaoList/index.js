import React from 'react';
import PropsTypes from 'prop-types';
import Ciao from '../Ciao';

const CiaoList = (props) => {
  const { users } = props;
  const mapUsersCiao = ({ id, fname }) => (
    <Ciao key={id} id={id} name={fname} />
  );
  return <div>{users.map(mapUsersCiao)}</div>;
};


CiaoList.PropsTypes = {
  users: PropsTypes.arrayOf(
    PropsTypes.shape({
      id: PropsTypes.number.isRequired,
      fname: PropsTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CiaoList;
