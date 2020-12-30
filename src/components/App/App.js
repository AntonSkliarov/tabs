import React, { useState } from 'react';
import { options } from '../../api/options'
import { Tabs } from '../Tabs'
import { CurrentTabValue } from '../CurrentTabValue'

export function App() {
  const [tabsList] = useState(options);
  const [currentTab, setCurrentTab] = useState(tabsList[0]);

  const handleSelectTab = (tab) => {
    setCurrentTab(tab);
  }

  return (
    <div className="App">
      <h1>Tabs</h1>
      <Tabs
        tabsList={tabsList}
        currentTab={currentTab}
        handleSelectTab={handleSelectTab}
      />

      <CurrentTabValue value={currentTab.value} />
    </div>
  );
}
