import React, {useEffect, useState} from 'react';
import './MatchCard.scss';
import classNames from 'classnames';
import moment from "moment";

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
    dateOfStart,
    command1results,
    command2results,
    gameResults
  }
  ) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const date = dateOfStart?.getDate()
  const hours = dateOfStart?.getHours()
  const minutes = dateOfStart?.getMinutes() < 10?
    `0${dateOfStart?.getMinutes()}` : `${dateOfStart?.getMinutes()}`

  const [duration, setDuration] = useState(moment.duration((dateOfStart - (new Date)), 'milliseconds'));

  useEffect(()=>{
    let interval = setInterval(()=>{setDuration(
      moment.duration((dateOfStart - (new Date)), 'milliseconds')
    )},1000);
    return ()=>{clearInterval(interval)}
  },[])


  return (
    <article className={
      classNames([
       'match-card',
        {
          'match-card_status-live': status === 'live',
          'match-card_status-upcoming': status === 'upcoming',
          'match-card_status-finished': status === 'finished',
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
             <span className={'match-card__match-link caption'}>WATCH LIVE!</span>
           )
         }
         {
           (status==='upcoming' || status === 'finished') && (
             <>
               <div className={
                 classNames({
                   'h4': true,
                   'match-card__tournament-time': status === 'upcoming',
                   'match-card__tournament-time_finished': status === 'finished',
                 })
               }>
                 {hours}:{minutes}
               </div>
               <div className="caption match-card__tournament-date">{date}</div>
             </>
           )
         }
       </div>
     </div>

      <div className={
        classNames(
          [
            {
              'match-card__logos-container_live': status === 'live',
              'match-card__logos-container_upcoming': (status === 'upcoming'|| status ==='finished'),
            }
          ]
        )
      }>
        <img src={command1Logo} className={'match-card__command-logo'} alt="logo of command"/>
        <img src={command2Logo} className={'match-card__command-logo'} alt="logo of command"/>
      </div>

      <div className="match-card__commands-container">
        <div className="match-card__command">
          <h5
            className={
              classNames({
                'h5 match-card__command-name': true,
                'h5 match-card__command-name_lose': command1results?.lose,
              })
            }
          >
            {command1Name}
          </h5>

          {
            (status === 'upcoming'|| status === 'live') && (
              <div className={'match-card__command-coefficient'}>{command1coefficient}</div>
            )
          }

          {
            status === 'finished' && (
              <div className={
                classNames({
                  'match-card__command-result': true,
                  'match-card__command-result_lose': command1results.lose,
                })
              }>
                {command1results.count}
              </div>
            )
          }
        </div>


        <div className="match-card__command">
          <h5
            className={
              classNames({
                'h5 match-card__command-name': true,
                'h5 match-card__command-name_lose': command2results?.lose,
              })
            }
          >
            {command2Name}
          </h5>

          {
            (status === 'upcoming' || status === 'live') && (
              <div className={'match-card__command-coefficient'}>{command2coefficient}</div>
            )
          }

          {
            status === 'finished' && (
              <div className={
                classNames({
                  'match-card__command-result': true,
                  'match-card__command-result_lose': command2results.lose,
                })
              }>
                {command2results.count}
              </div>
            )
          }
        </div>
      </div>

      <div className="match-card__bottom-container">
        {
          status === 'live' && (
            <div className="match-card__tournament-system caption">
              {tournamentSystem}
            </div>
          )
        }

        {
          status === 'upcoming' && (
            <div className="match-card__tournament-system caption">
              Starts in: {duration.days() * 24}h {duration.minutes()}min {duration.seconds()}sec • {tournamentSystem}
            </div>
          )
        }

        {
          status === 'finished' && (
            <div className="match-card__tournament-system caption">
              {gameResults}
            </div>
          )
        }
        <img src={parnterLogo} alt="" className="match-card__partner-logo"/>
      </div>

    </article>
  )
}

export default MatchCard;
