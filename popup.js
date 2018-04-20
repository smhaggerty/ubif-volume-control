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
  volumeIndicator.setAttribute("value", data.volume)

});

changeColor.onclick = function(element) {
  let color = element.target.value;
    chrome.tabs.executeScript(
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
};

chrome.storage.sync.get('color', data => {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
