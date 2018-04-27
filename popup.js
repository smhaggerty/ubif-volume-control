// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');
let changeVolume = document.getElementById('changeVolume');
let volumeDisplay = document.getElementById('volumeDisplay');

chrome.storage.sync.get(data => {
  changeVolume.value = data.volume * 100;
  volumeDisplay.innerHTML = Math.floor(data.volume * 100);
});

changeVolume.onmouseup = function(event)  {
  updateVolume(event)
  adjustOpenTabVolume()
};

const updateVolume = function(event) {
  let volume = event.srcElement.value / 100;
  volumeDisplay.innerHTML = Math.floor(volume * 100);
  chrome.storage.sync.set({volume: volume});
};

const adjustOpenTabVolume = function() {
  chrome.storage.sync.get(data => console.log(data));
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.executeScript(tabs[i].id, {file: "audio.js"});
    }
  });
};
