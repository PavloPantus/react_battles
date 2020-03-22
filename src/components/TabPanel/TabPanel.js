import React from 'react';
import './TabPanel.scss';
import MatchCard from "../MatchCard/MatchCard";

const TabPanel = () => {
  return (
    <div className={'matches-container'}>
      <a href="#">
        <MatchCard
          nameOfTournament={'Asia Minor: Play-Off'}
          status={'live'}
          command1Logo={'/images/command1-logo.png'}
          command2Logo={'/images/command2-logo.png'}
          command1Name={'Albert Warren'}
          command2Name={'Gloria Henry'}
          command1coefficient={'3.22'}
          command2coefficient={'53.22'}
          tournamentSystem={'Bо 3'}
          parnterLogo={'/images/match-partner-logo.png'}
        />
      </a>
      <MatchCard
        nameOfTournament={'Asia Minor: Play-Off'}
        status={'upcoming'}
        time={'19:00'}
        date={'29 октября'}
        command1Logo={'/images/command1-logo.png'}
        command2Logo={'/images/command2-logo.png'}
        command1Name={'Albert Warren'}
        command2Name={'Gloria Henry'}
        command1coefficient={'3.22'}
        command2coefficient={'53.22'}
        tournamentSystem={'Bо 3'}
        parnterLogo={'/images/match-partner-logo.png'}
      />
      <div style={{width: '100%', height: '200px', backgroundColor: 'black'}} className="match"></div>
      <div style={{width: '100%', height: '200px', backgroundColor: 'black'}} className="match"></div>
      <div style={{width: '100%', height: '200px', backgroundColor: 'black'}} className="match"></div>
      <div style={{width: '100%', height: '200px', backgroundColor: 'black'}} className="match"></div>
      <div style={{width: '100%', height: '200px', backgroundColor: 'black'}} className="match"></div>
      <div style={{width: '100%', height: '200px', backgroundColor: 'black'}} className="match"></div>

    </div>
  );
}

export default TabPanel;
