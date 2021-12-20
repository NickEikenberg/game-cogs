import React, { useState, useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { UserContext } from '../_app';
import Header from '../../src/components/Header/Header';
import Footer from '../../src/components/Footer/Footer';

import {
  PasswordError,
  UserWelcome,
  EmailError,
} from '../../src/components/User/Index';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [collection, setCollection] = useState('');
  const [forsale, setforsale] = useState('');
  const [wantlist, setwantlist] = useState('');
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);

  const handleLogin = (user) => {
    console.log(user);
    axios
      .put('http://localhost:8000/api/useraccount/login', user)
      .then((res) => {
        console.log(res.data);
        if (res.data.email) {
          setCurrentUser(res.data);
        } else if (res.data.error == "Passwords don't match!") {
          setWrongPassword(true);
        } else {
          setWrongEmail(true);
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
      collection: collection,
      forsale: forsale,
      wantlist: wantlist,
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
          <UserWelcome />
        </>
      ) : (
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
            {wrongPassword ? <PasswordError /> : null}
            {wrongEmail ? <EmailError /> : null}
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
      )}
      <Footer />
    </div>
  );
};

export default Login;
