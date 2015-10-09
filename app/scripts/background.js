'use strict';

function _handleYoutubeRequest(args) {
  chrome.tabs.create({
    url: "https://www.youtube.com/watch?v=" + args.id,
    active: true
  });
}

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "youtubeRequest");
  port.onMessage.addListener(_handleYoutubeRequest);
});
