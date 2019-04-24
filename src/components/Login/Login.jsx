import React from 'react';

const Login = ({ handleSubmit }) => {
  return (
    <main className="login flex-center">
      <form onSubmit={handleSubmit} className="flex-center">
        <label for="username">Username:</label>
        <input id="username" placeholder="username" />
        <button type="submit">Log in</button>
      </form>
    </main>
  );
};

export default Login;
