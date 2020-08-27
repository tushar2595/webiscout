import React from 'react';
import './style.scss';
import { Images } from '../../Shared/Assets';
const Footer = () => {
  return (
    <div className={'footer-container'}>
      <div className={'logo-container'}>
        <img src={Images.logo} />
      </div>

    </div>
  )
}
export default Footer;