import React from 'react';

const Container = (props) => {
  const { children, heading } = props;
  return (
    <div style={{ display: 'flex' }}>
      <h1 style={{ backgroundColor: 'red', color: 'blue' }}>{heading}</h1>
      <ul>{children}</ul>
    </div>
  );
};

export default Container;
