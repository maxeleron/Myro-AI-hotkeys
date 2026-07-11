'use strict';

// List of hotkeys
const hotkeys = {
  // Alt + S --> Select AI model
  'Alt+S': () => {
    const btn = document.getElementById('model-select-trigger');
    dispatchFullClick(btn, 'Model selector');
  },
  'Alt+І': () => { // cyrillic 'І', which is in the same place as 'S' on Ukrainian keyboards
    const btn = document.getElementById('model-select-trigger');
    dispatchFullClick(btn, 'Model selector');
  },

  // Alt + C --> collapse/expand sidebar
  'Alt+C': () => {
    const btn = document.querySelector('button[data-sidebar="trigger"]');
    dispatchFullClick(btn, 'Sidebar toggle');
  },
  'Alt+С': () => { // cyrillic 'С'
    const btn = document.querySelector('button[data-sidebar="trigger"]');
    dispatchFullClick(btn, 'Sidebar toggle');
  },
};

registerHotkeys(hotkeys);
