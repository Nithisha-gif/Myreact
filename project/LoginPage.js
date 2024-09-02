import React, { useState } from 'react';
import RegisterPage from './RegisterPage';

function LoginPage({ onLogin }) {
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account?{' '}
          <span onClick={() => setShowRegister(true)} style={{ color: 'blue', cursor: 'pointer' }}>
            Register here
          </span>
        </p>
        {showRegister && <RegisterPage />}
      </div>
    </div>
  );
}

export default LoginPage;