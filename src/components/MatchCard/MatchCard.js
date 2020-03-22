import React from 'react';
import './MatchCard.scss';
import classNames from 'classnames';

const MatchCard = (
  {
    nameOfTournament,
    status,
    command1Logo,
    command2Logo,
    command1Name,
    command2Name,
    command1coefficient,
    command2coefficient,
    tournamentSystem,
    parnterLogo,
    time,
    date,


  }
  ) => {
  return (
    <article className={
      classNames([
       'match-card',
        {
          'match-card_status-live': status === 'live',
          'match-card_status-upcoming': status === 'upcoming',
        }
      ])
    }>
     <div className="match-card__top-container">
       <h2 className={'match-card__tournament-name caption'}>
         {nameOfTournament}
       </h2>
       <div className="match-card__watch-time-container">
         {
           status==='live' && (
             <a href={'#'} className={'match-card__match-link caption'}>WATCH LIVE!</a>
           )
         }
         {
           (status==='upcoming') && (
             <div className="match-card__tournament-time">{time}</div>
           )
         }
       </div>
     </div>

      <div className="match-card__logos-container">
        <img src={command1Logo} className={'match-card__command-logo'} alt="logo of command"/>
        <img src={command2Logo} className={'match-card__command-logo'} alt="logo of command"/>
      </div>

      <div className="match-card__commands-container">
        <div className="match-card__command">
          <h5 className={'h5 match-card__command-name'}>{command1Name}</h5>
          <div className={'match-card__command-coefficient'}>{command1coefficient}</div>
        </div>

        <div className="match-card__command">
          <h5 className={'h5 match-card__command-name'}>{command2Name}</h5>
          <div className={'match-card__command-coefficient'}>{command2coefficient}</div>
        </div>
      </div>

      <div className="match-card__bottom-container">
        <div className="match-card__tournament-system caption">{tournamentSystem}</div>
        <img src={parnterLogo} alt="" className="match-card__partner-logo"/>
      </div>

    </article>
  )
}

export default MatchCard;
