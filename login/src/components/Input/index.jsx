import React, { useState, useEffect } from 'react';

import './input.scss';

export const Input = props => {

  const [messageError, setMessageError] = useState(``);
  
  useEffect(
    () => {
      return props.status ? setMessageError(``) : setMessageError(`Digite um(a) ${props.textLabel} válido(a);`);
    },
    [props.status, props.textLabel]
  );


  const [styleError, setStyleError] = useState(``);

  useEffect(
    () => {
      return props.status ? setStyleError(``): setStyleError(`${props.styleInputClass}--input--error`);
    },
    [props.status, props.styleInputClass]
  );


  const [iconError, setIconError] = useState(``);
  
  useEffect(
    () => {
      return props.status ? setIconError(``): setIconError(`X`);
    },
    [props.status]
  );


  const [inputValue, setInputValue] = useState(props.inputValue);
  
  useEffect(
    () => {
      return props.setInputValue(inputValue);
    }
  );


  const valueHandler = e => {
    setInputValue(e.target.value);
  }


  return (
    <>
      <div className={`${props.styleWrapClass}`}>
        
        <label className={props.styleLabelClass}
          htmlFor={props.inputId}>
            {props.textLabel}
        </label>
        
        <div className={props.styleInputClass}>
          <input className={`${props.styleInputClass}--input ${styleError}`}
            type={props.inputType}
            name={props.inputName}
            id={props.inputId}
            value={inputValue}
            onChange={valueHandler}
          />
          
          <span className={`${props.styleInputClass}--icon`}>
            {iconError}
          </span>
        </div>

        <span className={`${props.styleInputClass}--message`}>
          {messageError}
        </span>
        
      </div>
    </>
  );
}