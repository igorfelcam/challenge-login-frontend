import React, { useState } from 'react';

import { Input } from '../../../Input'
import { Button } from '../../../Button'

import './form.scss';

export const Form = () => {

  const [email, setEmail] = useState(`user.name@mail.com`);
  const [emailStatus, setEmailStatus] = useState(true);
  const [password, setPassword] = useState(`123456`);
  const [passwordStatus, setPasswordStatus] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    if (email === `igorfelcam@mail.com`) {
      setEmailStatus(false);
    }

    if (password === `123`) {
      setPasswordStatus(false);
    }

    alert(`${email} - ${emailStatus} | ${password} - ${passwordStatus}`);
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