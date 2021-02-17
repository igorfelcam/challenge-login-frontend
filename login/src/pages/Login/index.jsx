import React from 'react';

import { Banner } from '../../components/Banner/';
import { Login } from '../../components/Login/';

import './login.scss';

export const LoginPage = () => {

  return (
    <>

      <div className="container">
        <h1 className="container--hidden">Wiser Educação</h1>
        <Banner />
        <Login />
      </div>

    </>
  );

}