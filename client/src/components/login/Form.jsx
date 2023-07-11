import React from 'react';

const Form = () => {
  return (
    <form className="login">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="button">Login</button>
    </form>
  );
};

export default Form;
