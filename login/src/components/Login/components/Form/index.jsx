import React, { useState } from 'react';

import { Input } from '../../../Input'
import { Button } from '../../../Button'

import api from '../../../../services/api';

import './form.scss';

export const Form = () => {

  const [email, setEmail] = useState(`user.name@mail.com`);
  const [emailStatus, setEmailStatus] = useState(true);
  const [password, setPassword] = useState(`123456`);
  const [passwordStatus, setPasswordStatus] = useState(true);

  const handleSubmit = async e => {
    e.preventDefault();

    let status = true;

    if (email === `wiser@mail.com`) {
      status = false;
      setEmailStatus(status);
    }

    if (password === `123`) {
      status = false;
      setPasswordStatus(status);
    }

    if (!status) {
      return;
    }

    api.post()
      .then(
        response => {

          console.log(response.data);

          const status = response.data.status;

          if (!status) {
            setEmailStatus(status);
            setPasswordStatus(status);
          }

          return;
        }
      )
      .catch();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        
        <h2 className="form__title">Olá, seja bem-vindo!</h2>
        <p className="form__description">Para acessar a plataforma, faça seu login.</p>

        <Input
          styleWrapClass="form__wrap"
          styleLabelClass="form__label"
          textLabel="e-mail"
          styleInputClass="form__input"
          inputId="email"
          inputType="email"
          inputName="email"
          styleInputClassMessage="form__input--error"
          status={emailStatus}
          inputValue={email}
          setInputValue={setEmail}
        />

        <Input
          styleWrapClass="form__wrap"
          styleLabelClass="form__label"
          textLabel="senha"
          styleInputClass="form__input"
          inputId="password"
          inputType="password"
          inputName="password"
          styleInputClassMessage="form__input--error"
          status={passwordStatus}
          inputValue={password}
          setInputValue={setPassword}
        />

        <Button
          styleClass="form__button"
          text="entrar"
          buttonType="submit"
        />

      </form>
    </>
  );
}