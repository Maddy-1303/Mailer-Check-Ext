chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "executeContentScript") {
      console.log("Domain Name from popup:", message.domainName);
      chrome.runtime.sendMessage({ action: 'fetchApiData', domainName: message.domainName });
    } else if (message.action === "apiResponse") {
      console.log("API Response Data:", message.data);
  
      const name = message.data.name;
      const company = message.data.company;
      const email = message.data.username + message.domainName;
      
     
        enterData(name, company, email, password);
     
    }
  });
  
  function enterData(name, company, email, password) {
    document.getElementById('name').value = name;
    document.getElementById('account_name').value = company;
    document.getElementById('email').value = email;
    document.getElementById('password').value = ":g<|Izm#(a]4.W7mRD#1";
    document.getElementById('terms').checked = true;
    document.getElementById('subscribe').checked = true;
  }
  