// src/Login.js

import React, { useEffect, useState } from 'react';

function Login() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/user/login')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <p>{message}</p>
    </div>
  );
}

export default Login;
