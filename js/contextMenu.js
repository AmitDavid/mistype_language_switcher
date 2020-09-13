// Create menu button
browser.menus.create({
  id: "switch-texts",
  title: "Switch Texts",
  contexts: ["editable"]
});

// Add event listener for context menu button clicks
browser.menus.onClicked.addListener((info, tab) => {
  browser.tabs.executeScript(tab.id, {file: "js/convertText.js"})
});