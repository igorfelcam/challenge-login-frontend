import React, { useState, useEffect } from 'react';

import './input.scss';

export const Input = props => {

  const [message, setMessage] = useState();
  
  useEffect(
    () => {
      return props.status ? ``: setMessage(`Digite um(a) ${props.textLabel} válido(a);`);
    },
    [props.status, props.textLabel]
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
      <div className={props.styleWrapClass}>
        
        <label className={props.styleLabelClass}
          htmlFor={props.inputId}>
            {props.textLabel}
        </label>
        
        <input className={props.styleInputClass}
          type={props.inputType}
          name={props.inputName}
          id={props.inputId}
          value={inputValue}
          onChange={valueHandler}
        />
        
        <span className={props.styleInputClassMessage}>
          {message}
        </span>
        
      </div>
    </>
  );
}