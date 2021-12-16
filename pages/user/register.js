import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '../../src/components/Header/Header';
import Footer from '../../src/components/Footer/Footer';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserRegister = (newUser) => {
    axios
      .post('http://localhost:8000/api/useraccount', newUser)
      .then((res) => {
        console.log(res);
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

  const getUsers = (e) => {
    e.preventDefault();
    axios
      .get('http://localhost:8000/api/useraccount')
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
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
      <div className="flex flex-col items-center py-5">
        <h1 className="text-2xl">Create a GameCogs account</h1>
        <form
          onSubmit={createNewUser}
          className="flex flex-col w-1/3 space-y-2 py-5"
        >
          <button onClick={getUsers}>click me</button>
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
            className="cursor-pointer rounded-md border p-2 bg-lime-600 text-white hover:bg-lime-700 transition"
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
      <Footer />
    </div>
  );
};

export default Register;
