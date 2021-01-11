import React, { useState } from 'react';
import { TabsList } from '../TabsList';
import { CurrentTabText } from '../CurrentTabText';
import './App.sass';
import './_reset.sass';
import { DEFAULT_TABS , options } from '../../options/options';

export function App() {
  const [currentTab, setCurrentTab] = useState(options[0]);

  const onChange = (tab) => {
    setCurrentTab(tab);
  };

  const renderTabText = () => {
    return (
      <div className="current-tab">
        <p className="current-tab__text">
          {currentTab.label}
        </p>
      </div>
    );
  };

  const renderTab = (tab) => {
    return (
      <>
        <p>Custom label</p>
        {tab.label}
      </>
    );
  };

  const renderDefaultTab = (tab) => {
    return (
      <>
        {tab.label}
      </>
    );
  };

  return (
    <>
      <TabsList
        tabsList={options}
        currentTab={currentTab}
        handleSelectTab={onChange}
        render={DEFAULT_TABS ? renderDefaultTab : renderTab}
      />

      <CurrentTabText renderTabText={renderTabText} />
    </>
  );
}
