import React, { useState } from 'react';
import { Tabs } from '../Tabs';
import { CurrentTabValue } from '../CurrentTabValue';
import './App.sass';
import { DEFAULT_LABELS, options } from '../../options/options';

export function App() {
  const [currentTab, setCurrentTab] = useState(options[0]);

  const onChange = (tab) => {
    setCurrentTab(tab);
  };

  const renderTabValue = () => {
    return (
      <div className="current-tab">
        <p>
          {currentTab.value}
        </p>
      </div>
    );
  };

  const renderTabLabel = (tab) => {
    if (DEFAULT_LABELS) {
      return null;
    }

    return (
      <>
        <p>Custom label</p>
        {tab.label}
      </>
    )
  }

  const renderDefaultTabLabel = (tab) => {
    return (
      <>
        {tab.label}
      </>
    )
  }

  return (
    <div className="App">
      <h1>Tabs</h1>
      <Tabs
        tabsList={options}
        currentTab={currentTab}
        handleSelectTab={onChange}
        renderDefaultTabLabel={renderDefaultTabLabel}
        renderTabLabel={renderTabLabel}
      />

      <CurrentTabValue renderTabValue={renderTabValue} />
    </div>
  );
}
