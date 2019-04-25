import React from 'react';

const Login = ({ logIn, logOut, user }) => {
  let loginSection = (
    <form onSubmit={logIn} className="flex-center">
      <label for="username">Username:</label>
      <input id="username" placeholder="username" />
      <button type="submit">Log in</button>
    </form>
  );
  if (user) {
    loginSection = (
      <div>
        <h4>{user.username}</h4>
        <img href={user.avatar_url} alt="user avatar" />
        <button onClick={logOut}>Log out</button>
      </div>
    );
  }
  return <main className="login flex-center">{loginSection}</main>;
};

export default Login;
