import React, {useState} from 'react';
import './Header.scss';
import classNames from 'classnames';

const Header = ({activeTab,setActiveTab}) => {


  return (
    <header className={'header'}>
      <div className="content">
        <h1 className={'h1 header__heading'}>Make me up!</h1>
        <div className="header__tabs-controls">
          <button className={
            classNames({
              'button-1 header__tab-control': true,
              'header__tab-control_active': activeTab === 1,
            })
          }
            onClick={()=>{
              setActiveTab(1);
            }}
          >
            MATCHES
          </button>
          <button
            className={
              classNames({
                'button-1 header__tab-control': true,
                'header__tab-control_active': activeTab === 2,
              })
            }
            onClick={()=>{
              setActiveTab(2);
            }}
          >
            BATTLES
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;
