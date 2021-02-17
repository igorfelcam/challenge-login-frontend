import React from 'react';

import { Input } from '../../../Input'
import { Button } from '../../../Button'

import './form.scss';

export const Form = () => {

  return (
    <>

      <div className="form">
        
        <h2 className="form__title">Olá, seja bem-vindo!</h2>
        
        <p className="form__description">Para acessar a plataforma, <div>faça seu login.</div></p>

        <Input
          styleWrapClass="form__wrap"
          styleLabelClass="form__label"
          textLabel="e-mail"
          styleInputClass="form__input"
          inputId="email"
          inputType="email"
          inputName="email"
          styleInputClassMessage="form__input--error"
          error={true}
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
          error={false}
        />

        <Button
          styleClass="form__button"
          text="entrar"
        />

      </div>

    </>
  );

}