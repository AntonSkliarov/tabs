export const FUNC = {
  calcTransform: (tabs, activeTab) => {
    const tabWidth = 100 / tabs.length;
    const tabIndex = tabs.indexOf(activeTab);

    return tabWidth * tabIndex * tabs.length;
  },

  calcHighlighterStyle: (tabs, activeTab) => {
    return {
      width: `calc(100% / ${tabs.length}`,
      transform: `translate(${FUNC.calcTransform(tabs, activeTab)}%, 0)`
    };
  }
};
