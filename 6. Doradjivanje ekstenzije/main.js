const logo = document.querySelector("img.lnXdpd");
const logo2 = document.querySelector("a.logo img");
console.log(logo2)

logo.src = chrome.runtime.getURL("images/cysecor_logo.png");
logo.srcset = chrome.runtime.getURL("images/cysecor_logo.png");
logo2.src = chrome.runtime.getURL("images/cysecor_logo.png");
logo2.srcset = chrome.runtime.getURL("images/cysecor_logo.png");