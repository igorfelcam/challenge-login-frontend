import React, { useState, useEffect } from 'react';

import './input.scss';

export const Input = props => {

  const [message, setMessage] = useState();

  useEffect(() => {
    return props.error ? setMessage(`Digite um(a) ${props.textLabel} válido(a);`) : ``;
  }, []);

  return (
    <>

      <div className={props.styleWrapClass}>
        
        <label className={props.styleLabelClass} htmlFor={props.inputId}>{props.textLabel}</label>
        <input className={props.styleInputClass} type={props.inputType} name={props.inputName} id={props.inputId}/>
        
        <span className={props.styleInputClassMessage}>
          {message}
        </span>
        
      </div>

    </>
  );

}