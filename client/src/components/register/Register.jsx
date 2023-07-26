import React, { useState } from 'react';

const Register = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const onChange = (e) => {
    setUserData((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('clicked');
    await fetch('http://localhost:4000/register', {
      method: 'POST',
      // body: JSON.stringify({username, password}),
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok === true) {
        console.log(res);

      } else {
        alert('Registration Failed');
      }
    })
  }

  return (
    <form className="register" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        name="username"
        // onChange={(e) => setUsername(e.target.value)}
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        name="password"
        // onChange={(e) => setPassword(e.target.value)}
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
