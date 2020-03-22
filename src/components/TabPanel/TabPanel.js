/* eslint-disable react/prop-types,jsx-a11y/anchor-is-valid */
import React from 'react';
import './TabPanel.scss';
import MatchCard from '../MatchCard/MatchCard';
import BattleCard from '../BattleCard/BattleCard';

const TabPanel = ({ activeTab }) => (
  <div className="matches-container">
    {
      activeTab === 1 && (
      <>
        <a href="#">
          <MatchCard
            nameOfTournament="Asia Minor: Play-Off"
            status="live"
            command1Logo="/images/command1-logo.png"
            command2Logo="/images/command2-logo.png"
            command1Name="Albert Warren"
            command2Name="Gloria Henry"
            command1coefficient="3.22"
            command2coefficient="53.22"
            tournamentSystem="Bо 3"
            parnterLogo="/images/match-partner-logo.png"
          />
        </a>

        <MatchCard
          nameOfTournament="Asia Minor: Play-Off"
          status="upcoming"
          dateOfStart={new Date('2020-10-29T19:00:00.417-00:00')}
          command1Logo="/images/command1-logo.png"
          command2Logo="/images/command2-logo.png"
          command1Name="Albert Warren"
          command2Name="Gloria Henry"
          command1coefficient="3.22"
          command2coefficient="53.22"
          tournamentSystem="Bо 3"
          parnterLogo="/images/match-partner-logo.png"
        />

        <MatchCard
          nameOfTournament="Asia Minor: Play-Off"
          status="finished"
          dateOfStart={new Date('2020-10-29T19:00:00.417-00:00')}
          command1Logo="/images/command1-logo.png"
          command2Logo="/images/command2-logo.png"
          command1Name="Albert Warren"
          command2Name="Gloria Henry"
          command1results={{
            lose: true, count: 0,
          }}
          command2results={{
            lose: false, count: 3,
          }}
          gameResults="1:0 • 1:0 • 1:0"
          parnterLogo="/images/match-partner-logo.png"
        />

        <a href="#">
          <MatchCard
            nameOfTournament="Asia Minor: Play-Off"
            status="live"
            command1Logo="/images/command1-logo.png"
            command2Logo="/images/command2-logo.png"
            command1Name="Albert Warren"
            command2Name="Gloria Henry"
            command1coefficient="3.22"
            command2coefficient="53.22"
            tournamentSystem="Bо 3"
            parnterLogo="/images/match-partner-logo.png"
          />
        </a>

        <MatchCard
          nameOfTournament="Asia Minor: Play-Off"
          status="upcoming"
          dateOfStart={new Date('2020-10-29T19:00:00.417-00:00')}
          command1Logo="/images/command1-logo.png"
          command2Logo="/images/command2-logo.png"
          command1Name="Albert Warren"
          command2Name="Gloria Henry"
          command1coefficient="3.22"
          command2coefficient="53.22"
          tournamentSystem="Bо 3"
          parnterLogo="/images/match-partner-logo.png"
        />

        <MatchCard
          nameOfTournament="Asia Minor: Play-Off"
          status="finished"
          dateOfStart={new Date('2020-10-29T19:00:00.417-00:00')}
          command1Logo="/images/command1-logo.png"
          command2Logo="/images/command2-logo.png"
          command1Name="Albert Warren"
          command2Name="Gloria Henry"
          command1results={{
            lose: true, count: 0,
          }}
          command2results={{
            lose: false, count: 3,
          }}
          gameResults="1:0 • 1:0 • 1:0"
          parnterLogo="/images/match-partner-logo.png"
        />

        <a href="#">
          <MatchCard
            nameOfTournament="Asia Minor: Play-Off"
            status="live"
            command1Logo="/images/command1-logo.png"
            command2Logo="/images/command2-logo.png"
            command1Name="Albert Warren"
            command2Name="Gloria Henry"
            command1coefficient="3.22"
            command2coefficient="53.22"
            tournamentSystem="Bо 3"
            parnterLogo="/images/match-partner-logo.png"
          />
        </a>

        <MatchCard
          nameOfTournament="Asia Minor: Play-Off"
          status="upcoming"
          dateOfStart={new Date('2020-10-29T19:00:00.417-00:00')}
          command1Logo="/images/command1-logo.png"
          command2Logo="/images/command2-logo.png"
          command1Name="Albert Warren"
          command2Name="Gloria Henry"
          command1coefficient="3.22"
          command2coefficient="53.22"
          tournamentSystem="Bо 3"
          parnterLogo="/images/match-partner-logo.png"
        />

        <MatchCard
          nameOfTournament="Asia Minor: Play-Off"
          status="finished"
          dateOfStart={new Date('2020-10-29T19:00:00.417-00:00')}
          command1Logo="/images/command1-logo.png"
          command2Logo="/images/command2-logo.png"
          command1Name="Albert Warren"
          command2Name="Gloria Henry"
          command1results={{
            lose: true, count: 0,
          }}
          command2results={{
            lose: false, count: 3,
          }}
          gameResults="1:0 • 1:0 • 1:0"
          parnterLogo="/images/match-partner-logo.png"
        />

      </>
      )
    }

    {
      activeTab === 2 && (
      <>
        <BattleCard
          nameOfTournament="Asia Minor: Play-Off"
          status="finished"
          dateOfStart={new Date('2020-03-08T11:00:00.417-00:00')}
          group1Name="Group A"
          group2Name="Group B"
          matchNumber="1"
          disciplineIcon="/images/icon-discipline.png"
          map="Erangel"
          winner={{
            command: 'Natus Vincere',
            group: 'A',
            points: 233,
          }}
        />

        <BattleCard
          nameOfTournament="Asia Minor: Play-Off"
          status="upcoming"
          dateOfStart={new Date('2020-03-26T11:00:00.417-00:00')}
          group1Name="Group A"
          group2Name="Group B"
          matchNumber="1"
          disciplineIcon="/images/icon-discipline.png"
          map="Erangel"
        />

        <a href="#">
          <BattleCard
            nameOfTournament="Asia Minor: Play-Off"
            status="live"
            group1Name="Group A"
            group2Name="Group B"
            matchNumber="1"
            disciplineIcon="/images/icon-discipline.png"
            map="Erangel"
          />
        </a>

        <BattleCard
          nameOfTournament="Asia Minor: Play-Off"
          status="finished"
          dateOfStart={new Date('2020-03-08T11:00:00.417-00:00')}
          group1Name="Group A"
          group2Name="Group B"
          matchNumber="1"
          disciplineIcon="/images/icon-discipline.png"
          map="Erangel"
          winner={{
            command: 'Natus Vincere',
            group: 'A',
            points: 233,
          }}
        />

        <BattleCard
          nameOfTournament="Asia Minor: Play-Off"
          status="upcoming"
          dateOfStart={new Date('2020-03-26T11:00:00.417-00:00')}
          group1Name="Group A"
          group2Name="Group B"
          matchNumber="1"
          disciplineIcon="/images/icon-discipline.png"
          map="Erangel"
        />

        <a href="#">
          <BattleCard
            nameOfTournament="Asia Minor: Play-Off"
            status="live"
            group1Name="Group A"
            group2Name="Group B"
            matchNumber="1"
            disciplineIcon="/images/icon-discipline.png"
            map="Erangel"
          />
        </a>

        <BattleCard
          nameOfTournament="Asia Minor: Play-Off"
          status="finished"
          dateOfStart={new Date('2020-03-08T11:00:00.417-00:00')}
          group1Name="Group A"
          group2Name="Group B"
          matchNumber="1"
          disciplineIcon="/images/icon-discipline.png"
          map="Erangel"
          winner={{
            command: 'Natus Vincere',
            group: 'A',
            points: 233,
          }}
        />

        <BattleCard
          nameOfTournament="Asia Minor: Play-Off"
          status="upcoming"
          dateOfStart={new Date('2020-03-26T11:00:00.417-00:00')}
          group1Name="Group A"
          group2Name="Group B"
          matchNumber="1"
          disciplineIcon="/images/icon-discipline.png"
          map="Erangel"
        />

        <a href="#">
          <BattleCard
            nameOfTournament="Asia Minor: Play-Off"
            status="live"
            group1Name="Group A"
            group2Name="Group B"
            matchNumber="1"
            disciplineIcon="/images/icon-discipline.png"
            map="Erangel"
          />
        </a>

      </>
      )
    }
  </div>
);

export default TabPanel;
