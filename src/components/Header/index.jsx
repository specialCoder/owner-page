import React from 'react';
import BgConf from '../BgConf/index';
import './style.css';

const Header = (props)=>{
    const {
        handleColorSelected
    } = props;
    return (<div className="header">
    <p className="header-title">
        我的主页
    </p>
  <BgConf handleClick={handleColorSelected}/>
  </div>);
}

export default Header;