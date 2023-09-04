// document.getElementById('replaceButton').addEventListener('click', function() {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       chrome.scripting.executeScript({
//         target: { tabId: tabs[0].id },
//         function: replaceNewlinesWithSpaces
//       });
//     });
//   });
  
//   function replaceNewlinesWithSpaces() {
//     const textAreas = document.querySelectorAll('textarea.orig');
//     textAreas.forEach(textArea => {
//       textArea.value = textArea.value.replace(/\n/g, ' ');
//     });
//   }
  