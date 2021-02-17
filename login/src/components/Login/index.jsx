import React from 'react';

import { Form } from './components/Form';
import { Reset } from './components/Reset';

import './login.scss';

export const Login = () => {

  return (
    <>

      <div className="container__login">
        
        <Form />
        <Reset />

      </div>

    </>
  );

}