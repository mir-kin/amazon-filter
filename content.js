chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    console.log(request.message);
    sendResponse({status: 'success'});
  }
);
