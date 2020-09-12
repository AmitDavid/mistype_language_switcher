function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

browser.menus.create({
  id: "switch-texts",
  title: "Switch Texts",
  contexts: ["editable"]
}, onCreated);

browser.menus.onClicked.addListener((info, tab) => {
    browser.tabs.executeScript(tab.id, {code: 'document.body.style.border = "5px solid blue"'})
});