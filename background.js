chrome.tabs.onUpdated.addListener(function(activeInfo){
  chrome.tabs.executeScript(null, {file: "test.js"});
})
