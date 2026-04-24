const shortcutsData = {
  chatgpt: [
    { shortcut: "<kbd>Ctrl</kbd> + <kbd>/</kbd>", action: "Show all shortcuts", type: "builtin" },
    { shortcut: "<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>", action: "New chat", type: "builtin" },
    { shortcut: "<kbd>Ctrl</kbd> + <kbd>K</kbd>", action: "Search chats", type: "builtin" },
    { shortcut: "<kbd>Shift</kbd> + <kbd>Esc</kbd>", action: "Focus input field", type: "builtin" },
    { shortcut: "<kbd>Alt</kbd> + <kbd>A</kbd>", action: "Switch to next AI model", type: "custom" },
    { shortcut: "<kbd>Alt</kbd> + <kbd>C</kbd>", action: "Collapse/expand sidebar", type: "custom" }
  ],
  gemini: [
    { shortcut: "<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>", action: "New chat", type: "builtin" },
    { shortcut: "<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd>", action: "Search conversations", type: "builtin" },
    { shortcut: "<kbd>Alt</kbd> + <kbd>A</kbd>", action: "Switch to next AI model", type: "custom" },
    { shortcut: "<kbd>Alt</kbd> + <kbd>C</kbd>", action: "Collapse/expand sidebar", type: "custom" }
  ],
  grok: [
    { shortcut: "<kbd>Ctrl</kbd> + <kbd>K</kbd>", action: "Search", type: "builtin" },
    { shortcut: "<kbd>Ctrl</kbd> + <kbd>J</kbd>", action: "Switch to Default chat", type: "builtin" },
    { shortcut: "<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd>", action: "Switch to Private chat", type: "builtin" },
    { shortcut: "<kbd>Alt</kbd> + <kbd>A</kbd>", action: "Switch to next AI model", type: "custom" },
    { shortcut: "<kbd>Alt</kbd> + <kbd>C</kbd>", action: "Collapse/expand sidebar", type: "custom" }
  ]
};

function renderShortcuts(platform) {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  const shortcuts = shortcutsData[platform] || [];
  
  shortcuts.forEach(item => {
    const row = document.createElement('tr');
    row.className = item.type;
    row.innerHTML = `
      <td>${item.shortcut}</td>
      <td>${item.action}</td>
    `;
    tbody.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const platform = tab.getAttribute('data-platform');
      renderShortcuts(platform);
    });
  });

  // Початковий рендер
  renderShortcuts('chatgpt');
});
