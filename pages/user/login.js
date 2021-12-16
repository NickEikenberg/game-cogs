import React from 'react';
import Header from '../../src/components/Header/Header';
import Footer from '../../src/components/Footer/Footer';
import Link from 'next/link';

const Login = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center py-5">
        <h1 className="text-2xl">Log in to your GameCogs account</h1>
        <form
          // onSubmit={}
          className="flex flex-col w-1/3 space-y-2 py-5"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            // onChange={}
            className="rounded-md border p-2"
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            // onChange={}
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
