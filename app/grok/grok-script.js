'use strict';

function dispatchFullClick(element, actionName = 'element') {
  if (!element) {
    console.warn(`!!! ${actionName} not found`);
    return false;
  }

  element.focus();

  const events = ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'];

  events.forEach((type) => {
    const event = new PointerEvent(type, {
      bubbles: true,
      cancelable: true,
      composed: true,
      view: window,
      button: 0,
      buttons: 1,
      pointerId: 1,
      pointerType: 'mouse',
      isPrimary: true,
    });
    element.dispatchEvent(event);
  });

  return true;
}

// List of hotkeys
const hotkeys = {
  // Alt + A --> Select AI model
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

// Handler
let listenerAdded = false;

function addHotkeys() {
  if (listenerAdded) return;

  document.addEventListener('keydown', (e) => {
    let combo = '';
    if (e.altKey) combo += 'Alt+';
    if (e.ctrlKey) combo += 'Ctrl+';
    if (e.shiftKey) combo += 'Shift+';
    combo += e.key.toUpperCase();

    const action = hotkeys[combo];
    if (action) {
      e.preventDefault();
      action();
    }
  });

  listenerAdded = true;
}

// Launch when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addHotkeys);
} else {
  addHotkeys();
}
