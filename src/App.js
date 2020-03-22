import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import TabPanel from "./components/TabPanel/TabPanel";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <TabPanel />
      </main>
    </div>
  );
}

export default App;
