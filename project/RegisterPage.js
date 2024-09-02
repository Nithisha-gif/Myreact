import React from 'react';

function RegisterPage() {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
    </div>
  );
}

export default RegisterPage;