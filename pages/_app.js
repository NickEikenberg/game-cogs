import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/styles/globals.css';

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState({
    email: '',
    password: '',
    collection: '',
    forsale: '',
    wantlist: '',
  });

  return (
    <UserContext.Provider
      value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
