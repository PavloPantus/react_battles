import React, {useState, useEffect} from 'react';
import './BattleCard.scss';
import classNames from 'classnames';
import moment from "moment";

const BattleCard = (
  {
    nameOfTournament,
    status,
    disciplineIcon,
    group1Name,
    group2Name,
    matchNumber,
    dateOfStart,
    map,
    winner,
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
        'battle-card',
        {
          'battle-card_status-live': status === 'live',
          'battle-card_status-upcoming': status === 'upcoming',
          'battle-card_status-finished': status === 'finished',
        }
      ])
    }>
      <div className="battle-card__top-container">
        <h2 className={'battle-card__tournament-name caption'}>
          {nameOfTournament}
        </h2>
        <div className="battle-card__watch-time-container">
          {
            status==='live' && (
              <span className={'battle-card__match-link caption'}>WATCH LIVE!</span>
            )
          }
          {
            (status==='upcoming' || status === 'finished') && (
              <>
                <div className={
                  classNames({
                    'h4': true,
                    'battle-card__tournament-time': status === 'upcoming',
                    'battle-card__tournament-time_finished': status === 'finished',
                  })
                }>{hours}:{minutes}</div>
                <div className="caption battle-card__tournament-date">{monthNames[dateOfStart.getMonth()]} {date}</div>
              </>
            )
          }
        </div>
      </div>

      <div className={
        classNames(
          [
            {
              'battle-card__logos-container_live': status === 'live',
              'battle-card__logos-container_upcoming': (status === 'upcoming'|| status ==='finished'),
            }
          ]
        )
      }>
        <img src={disciplineIcon} className={'battle-card__discipline-icon'} alt="logo of command"/>
      </div>

      <div className="battle-card__groups-container">
        <div className="battle-card__groups">
          <h5
            className={'h5 battle-card__group-name'}
          >
            {group1Name}
          </h5>

          <h5
            className={'h5 battle-card__group-name'}
          >
            {group2Name}
          </h5>
        </div>

        <div className="battle-card__match-number">
          Match #{matchNumber}
        </div>

      </div>

      <div className="battle-card__bottom-container">
        {
          status === 'finished' && (
            <div className="battle-card__map caption">
              <img className={'battle-card__icon-winner'} src="/images/icon-winner.png" alt=""/>
              <span>{winner.command} ({winner.group}) - {winner.points}pts</span>
            </div>
          )
        }

        {
          (status === 'live') && (
            <div className="battle-card__map caption">
              Map: {map}
            </div>
          )
        }

        {
          (status === 'upcoming') && (
            <div className="battle-card__map caption">
              Starts in: {duration.days() * 24}h {duration.minutes()}min {duration.seconds()}sec • Map: {map}
            </div>
          )
        }
      </div>

    </article>
  )
}

export default BattleCard;
