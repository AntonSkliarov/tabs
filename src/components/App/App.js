import React, { useState } from 'react';
import { Tabs } from '../Tabs';
import { CurrentTabText } from '../CurrentTabText';
import './App.sass';
import './Reset.sass';
import { DEFAULT_LABELS, options } from '../../options/options';

export function App() {
  const [currentTab, setCurrentTab] = useState(options[0]);

  const onChange = (tab) => {
    setCurrentTab(tab);
  };

  const renderTabText = () => {
    return (
      <div className="current-tab">
        <p>
          {currentTab.label}
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
    );
  };

  const renderDefaultTabLabel = (tab) => {
    return (
      <>
        {tab.label}
      </>
    );
  };

  return (
    <div className="App">
      <Tabs
        tabsList={options}
        currentTab={currentTab}
        handleSelectTab={onChange}
        renderTabLabel={renderTabLabel}
        renderDefaultTabLabel={renderDefaultTabLabel}
      />

      <CurrentTabText renderTabText={renderTabText} />
    </div>
  );
}
