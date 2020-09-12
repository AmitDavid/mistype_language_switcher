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

const convert_code = '';

browser.menus.onClicked.addListener((info, tab) => {
    browser.tabs.executeScript(tab.id, {file: "js/convertText.js"})
});