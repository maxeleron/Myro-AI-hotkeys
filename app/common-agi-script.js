'use strict';

/**
 * Shared helpers for Gemini / Grok content scripts.
 * Must load before site scripts: registerHotkeys() and dispatchFullClick().
 */

function dispatchFullClick(el, label) {
  if (!el) {
    console.warn('[Myro] Element not found:', label);
    return;
  }

  const opts = { bubbles: true, cancelable: true, view: window };
  el.dispatchEvent(new PointerEvent('pointerdown', opts));
  el.dispatchEvent(new MouseEvent('mousedown', opts));
  el.dispatchEvent(new PointerEvent('pointerup', opts));
  el.dispatchEvent(new MouseEvent('mouseup', opts));
  el.click();
}

function eventToHotkey(event) {
  const parts = [];
  if (event.ctrlKey) parts.push('Ctrl');
  if (event.altKey) parts.push('Alt');
  if (event.shiftKey) parts.push('Shift');
  if (event.metaKey) parts.push('Meta');

  let key = event.key;
  if (key === ' ') key = 'Space';
  else if (key.length === 1) key = key.toUpperCase();

  parts.push(key);
  return parts.join('+');
}

function registerHotkeys(hotkeys) {
  document.addEventListener('keydown', (event) => {
    const combo = eventToHotkey(event);
    const handler = hotkeys[combo];
    if (!handler) return;

    event.preventDefault();
    event.stopPropagation();
    handler();
  }, true);
}
