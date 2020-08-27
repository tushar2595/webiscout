import React from 'react';
import './style.scss';
const CustomInput = (props) => {
  return (
    <div className={'input-container'}>
      <input className={'input-cont'} type={props.type} onChange={props.handleChange} name={props.name} placeholder={props.placeholder} />
    </div>
  )
}
export default CustomInput;