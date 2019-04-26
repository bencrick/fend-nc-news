import React from 'react';
import './Login.css';

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
      <main className="login">
        <h4>{`User: ${user.name}`}</h4>
        <img
          href={user.avatar_url}
          alt="user avatar"
          onerror="this.src='https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_user-circle-512.png'"
        />
        <button onClick={logOut}>Log out</button>
      </main>
    );
  }
  return <main className="login flex-center">{loginSection}</main>;
};

export default Login;
