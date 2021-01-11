import React, { useState } from 'react';
import { TabsNav } from '../TabsNav';
import { TabContent } from '../TabContent';
import './App.sass';
import './_reset.sass';
import { DEFAULT_TABS , options } from '../../options/options';

export function App() {
  const [currentTab, setCurrentTab] = useState(options[0]);

  const onChange = (tab) => {
    setCurrentTab(tab);
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
      <TabsNav
        tabsList={options}
        currentTab={currentTab}
        handleSelectTab={onChange}
        render={DEFAULT_TABS ? renderDefaultTab : renderTab}
      />

      <TabContent isSelected={currentTab.value === 'Images'}>
        <p>Some images</p>
      </TabContent>

      <TabContent isSelected={currentTab.value === 'Videos'}>
        <p>Some videos</p>
      </TabContent>

      <TabContent isSelected={currentTab.value === 'Friends'}>
        <p>Friends list</p>
      </TabContent>
    </>
  );
}
