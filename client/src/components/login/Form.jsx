import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../helpers/UserContext';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((res) => {
      if (res.ok === true) {
        console.log(res);
        res.json().then(userInfo => {
          setUserInfo(userInfo);
          setRedirect(true);
        })

      } else {
        alert('Login Failed');
      }
    })
  }

  if (redirect) {
    return <Navigate to={'/'} />
  };

  // console.log(userInfo);

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
