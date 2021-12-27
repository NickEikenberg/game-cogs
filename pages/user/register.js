import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '../../src/components/Header/Header';
import Footer from '../../src/components/Footer/Footer';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [createdEmail, setCreatedEmail] = useState('');

  const handleUserRegister = (newUser) => {
    axios
      .post('https://gamecogs-api.herokuapp.com/api/useraccount', newUser)
      .then((res) => {
        console.log(res);
        setIsRegistered(true);
        setCreatedEmail(res.data.email);
      })
      .catch((err) => console.error(err));
  };

  const createNewUser = (e) => {
    e.preventDefault();
    let newUser = {
      email: email,
      password: password,
    };
    handleUserRegister(newUser);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Header />

      {isRegistered ? (
        <div className="text-center flex flex-col  py-20 space-y-5">
          <div className="text-2xl">
            Thank you for signing up, {createdEmail}!
          </div>
          <Link href="/user/login">
            <a className="text-blue-600 hover:text-blue-800">
              Click here to log in
            </a>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center py-5">
          <h1 className="text-2xl">Create a GameCogs account</h1>
          <form
            onSubmit={createNewUser}
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
              value="Create Account"
              className="cursor-pointer rounded-md border p-2 bg-lime-600 text-white hover:bg-lime-700 transition active:bg-lime-600"
            ></input>
            <h1 className="text-center">
              Already have an account?
              <span className="text-sky-500 pl-1">
                <Link href="/user/login" passHref>
                  Log in
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

export default Register;
