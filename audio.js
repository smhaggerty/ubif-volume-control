// let audio = document.getElementById('audio-alert');
// chrome.storage.sync.get(data => {
//   chrome.tabs.executeScript({
//     // code: `document.getElementById("audio-alert").volume=${data.volume}`
//     code: 'console.log("foo")'
//   });
// });
// chrome.tabs.executeScript(
//   { code: 'console.log("foo");'}
// )
chrome.storage.sync.get(data => {
  document.getElementById("audio-alert").volume = data.volume
  console.log(data.volume)
});
