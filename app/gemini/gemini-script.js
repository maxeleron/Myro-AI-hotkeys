'use strict';

// List of hotkeys
const hotkeys = {
  // Alt + S --> Select AI model
  'Alt+S': () => {
    const btn = document.querySelector('button[data-test-id="bard-mode-menu-button"]');
    dispatchFullClick(btn, 'Model selector');
  },
  'Alt+І': () => { // cyrillic 'І', which is in the same place as 'S' on Ukrainian keyboards
    const btn = document.querySelector('button[data-test-id="bard-mode-menu-button"]');
    dispatchFullClick(btn, 'Model selector');
  },

  // Alt + C --> collapse/expand sidebar
  'Alt+C': () => {
    const btn = document.querySelector('button.main-menu-button');
    dispatchFullClick(btn, 'Sidebar toggle');
  },
  'Alt+С': () => { // cyrillic 'С'
    const btn = document.querySelector('button.main-menu-buttons');
    dispatchFullClick(btn, 'Sidebar toggle');
  },
};

registerHotkeys(hotkeys);
