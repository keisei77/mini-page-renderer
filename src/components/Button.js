import React from 'react';

const Button = (props) => {
  console.log(props);
  const { label } = props;
  return <button>{label}</button>;
};

export default Button;
