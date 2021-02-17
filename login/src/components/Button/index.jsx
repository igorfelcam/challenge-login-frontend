import React from 'react';

import './button.scss';

export const Button = props => {

  return (
    <>

      <button className={props.styleClass}>{props.text}</button>

    </>
  );

}