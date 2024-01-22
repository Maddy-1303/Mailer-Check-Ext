
const domain_name = "@theworld.com"

document.addEventListener('DOMContentLoaded', function () {
    const domainForm = document.getElementById('DomainForm');
    const errorMessageContainer = document.getElementById('errorMessage');
    const submitBtn = document.getElementById('submitButton');
    const domainInput = document.getElementById('domainname');
  
    // Initially hide the form and error message
    domainForm.style.display = 'none';
    errorMessageContainer.style.display = 'none';
  
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (isMailerCheckURL(tab.url)) {
        domainForm.style.display = 'block';
  
        // Set default domain value
        domainInput.value =  domain_name;
  
        domainForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const domainName = domainInput.value.trim();
          console.log("Domain Name:", domainName);
  
          // Send message to content script with domain name
          chrome.tabs.sendMessage(tab.id, { action: 'executeContentScript', domainName });
  
          window.close();
        });
      } else {
        // Show an error message if the user is not on MailerCheck
        errorMessageContainer.style.display = 'block';
        errorMessageContainer.textContent = 'You are not on MailerCheck.';
      }
    });
  
    function isMailerCheckURL(url) {
      return /^https:\/\/app\.mailercheck\.com\/register/.test(url);
    }
  });
  


