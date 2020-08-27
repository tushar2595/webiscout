import React from 'react';
import './style.scss';
import { Images } from '../../Shared/Assets';
import CustomInput from '../Common/CustomInput';
const Header = () => {
  return (
    <div className={'header-container'}>

      <img src={Images.logo} />
      <div className={'m-1'}>Webinar</div>
      <div className={'m-1'} >Events</div>
      <div className={'m-1'}>Virtual Event</div>
      <div className={'m-1 col-md-6'}>Game Fest</div>
      <div className={"m-1"}><CustomInput /></div>
      <div className={'m-1'}>Login</div>
    </div>

  )
}
export default Header;