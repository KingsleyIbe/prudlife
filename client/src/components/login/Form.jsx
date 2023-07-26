import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('clicked');
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      // body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    // })
    }).then((res) => {
      if (res.ok === true) {
        console.log(res);
        alert('Login successful')

      } else {
        alert('Login Failed');
      }
    })
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
