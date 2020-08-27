import React from 'react';
import './style.scss';
const CustomButton = (props) => {
  return (
    <div>
      <button className={'btn-container'} type={props.type} onClick={props.handleClick}>{props.title}</button>
    </div>
  )
}
export default CustomButton;