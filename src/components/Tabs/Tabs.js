import React, { useState } from 'react';
import { TabsList } from '../TabsList';
import { CurrentTabText } from '../CurrentTabText';
import './Tabs.sass';
import './_reset.sass';
import { DEFAULT_LABELS, options } from '../../options/options';

export function Tabs() {
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
    <div className="tabs">
      <TabsList
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
