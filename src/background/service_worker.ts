chrome.runtime.onInstalled.addListener(() => {
  console.log('Background Service Worker - Running');
  chrome.contextMenus.create({
    id: 'openSidePanel',
    title: 'Open side panel',
    contexts: ['all'],
  });
  // chrome.tabs.create({ url: 'index.html' });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log('tab', tab);
  if (info.menuItemId === 'openSidePanel' && tab?.windowId) {
    // This will open the panel in all the pages on the current window.
    chrome.sidePanel.open({ windowId: tab.windowId });
  }
});

chrome.commands.onCommand.addListener(command => {
  if (command === 'open_side_panel') {
    chrome.windows.getCurrent(w => {
      chrome.sidePanel.open({ windowId: w.id! });
      console.log(`[Command/Ctrl + Shift + O] triggered!`);
    });
  }
});
