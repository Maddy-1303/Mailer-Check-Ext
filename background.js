chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "fetchApiData") {

      const apiUrl = "https://api.namefake.com/";
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log("API Response:", data);
  
          chrome.tabs.sendMessage(sender.tab.id, { action: 'apiResponse', data, domainName: message.domainName});
         
        })
        .catch(error => {
          console.error("API Error:", error);
        });
    }
  });
  