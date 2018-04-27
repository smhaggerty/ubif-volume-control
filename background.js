'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({volume: 0.5});
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher()],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
