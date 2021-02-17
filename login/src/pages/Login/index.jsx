import React from 'react';

import { Banner } from '../../components/Banner/';
import { Login } from '../../components/Login/';

import './login.scss';

export const LoginPage = () => {

  return (
    <>

      <div className="container">
        <Banner />
        <Login />
      </div>

    </>
  );

}