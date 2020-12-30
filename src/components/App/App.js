import React, { useState } from 'react';
import { options } from '../../api/options'
import { Tabs } from '../Tabs'

export function App() {
  const [tabsList, setOptions] = useState(options);
  const [currentTab, setCurrentTab] = useState(tabsList[0]);

  return (
    <div className="App">
      <h1>Tabs</h1>
      <Tabs tabsList={tabsList} currentTab={currentTab}/>
    </div>
  );
}
