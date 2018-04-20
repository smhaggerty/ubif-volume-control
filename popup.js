// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');
let changeVolume = document.getElementById('changeVolume');
let volumeIndicator = document.getElementById('volumeIndicator')

chrome.storage.sync.get('color', data => {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

chrome.storage.sync.get('volume', data => {
  volumeIndicator.setAttribute("value", data.volume);
  changeVolume.value = data.volume
});

changeVolume.oninput = function(event)  {
  const volume = event.srcElement.value / 10
  volumeIndicator.value =  volume
  chrome.storage.sync.set({volume: volume})
  chrome.storage.sync.get(data => console.log(data))
};

chrome.storage.sync.get('color', data => {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
