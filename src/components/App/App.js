import React, { useState } from 'react';
import { options } from '../../options/options'
import { Tabs } from '../Tabs'
import { CurrentTabValue } from '../CurrentTabValue'
import './App.sass';

export function App() {
  const [currentTab, setCurrentTab] = useState(options[0]);

  const handleSelectTab = (tab) => {
    setCurrentTab(tab);
  }

  const renderTabValue = () => {
    return (
      <div className="current-tab">
        <p>
          {currentTab.value}
        </p>
      </div>
    )
  }

  // const renderTabLabel = () => {
  //   return (
  //     <div className="current-tab">
  //       <p>
  //         {currentTab.value}
  //       </p>
  //     </div>
  //   )
  // }

  // const renderDefaultTabLabel = () => {
  //   return (
  //     <div className="current-tab">
  //       <p>
  //         {currentTab.value}
  //       </p>
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      <h1>Tabs</h1>
      <Tabs
        tabsList={options}
        currentTab={currentTab}
        handleSelectTab={handleSelectTab}
      />

      <CurrentTabValue defaultRenderTab={renderTabValue} />
    </div>
  );
}
