import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import TabPanel from "./components/TabPanel/TabPanel";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="app">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="content">
        <main>
          <TabPanel
            activeTab={activeTab}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
