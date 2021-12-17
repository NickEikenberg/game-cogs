import React, { useState } from 'react';
import Header from '../../src/components/Header/Header';
import Footer from '../../src/components/Footer/Footer';
import Link from 'next/link';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  const handleLogin = (user) => {
    axios
      .put('http://localhost:8000/api/useraccount/login', user)
      .then((res) => {
        if (res.data.email) {
          setCurrentUser(res.data);
          console.log('Current user: ' + currentUser.email);
        } else {
          console.log('error', res);
        }
      })
      .catch((err) => console.error(err));
  };

  const loginRequest = (e) => {
    e.preventDefault();
    let userCredentials = {
      email: email,
      password: password,
    };
    handleLogin(userCredentials);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setCurrentUser({});
  };

  return (
    <div>
      <Header />
      {currentUser.email ? (
        <>
          <div>Welcome, {currentUser.email}</div>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <div>Logged out</div>
      )}
      <div className="flex flex-col items-center py-5">
        <h1 className="text-2xl">Log in to your GameCogs account</h1>
        <form
          onSubmit={loginRequest}
          className="flex flex-col w-1/3 space-y-2 py-5"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
            className="rounded-md border p-2"
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            className="rounded-md border p-2"
          ></input>
          <input
            type="submit"
            value="Log In"
            className="cursor-pointer rounded-md border p-2 bg-lime-600 text-white hover:bg-lime-700 transition active:bg-lime-600"
          ></input>
          <h1 className="text-center">
            New to GameCogs?
            <span className="text-sky-500 pl-1">
              <Link href="/user/register" passHref>
                Create an account
              </Link>
            </span>
          </h1>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
