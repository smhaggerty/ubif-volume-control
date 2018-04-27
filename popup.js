'use strict';

let changeVolume = document.getElementById('changeVolume');
let volumeDisplay = document.getElementById('volumeDisplay');

chrome.storage.sync.get(data => {
  changeVolume.value = data.volume * 100;
  volumeDisplay.innerHTML = Math.floor(data.volume * 100);
});

changeVolume.onmouseup = function(event)  {
  updateVolume(event);
  adjustOpenTabVolume();
};

const updateVolume = function(event) {
  let volume = event.srcElement.value / 100;
  volumeDisplay.innerHTML = Math.floor(volume * 100);
  chrome.storage.sync.set({volume: volume});
};

const adjustOpenTabVolume = function() {
  chrome.storage.sync.get(data => console.log(data));
  chrome.tabs.query({}, function (tabs) {
    tabs.map(checkCorrectTabAndExecute)
  });
};

const checkCorrectTabAndExecute = function(tab) {
  if (tab.hasOwnProperty('url') && tab.url.startsWith("https://portal.ubif")) {
      chrome.tabs.executeScript(tab.id, {file: "audio.js"});
  }
};
