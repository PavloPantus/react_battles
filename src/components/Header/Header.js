import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className={'header'}>
      <h1 className={'header__heading h1'}>Make me up!</h1>
      <div className="header__tabs-controls">
        <button className="button-1 header__tab-control header__tab-control_active">MATCHES</button>
        <button className="button-1 header__tab-control">BATTLES</button>
      </div>
    </header>
  )
}

export default Header;
