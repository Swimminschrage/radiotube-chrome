var port = chrome.runtime.connect({name: "youtubeRequest"});

function _radioTubeClick(event) {
  $.get("https://www.googleapis.com/youtube/v3/search", {
    part: "snippet",
    q: _getCurrentArtist() + " " + _getCurrentSong(),
    type: "video",
    key: YOUTUBE_SECRET_KEY
  }, _youtubeSearchSuccess);
}

function _youtubeSearchSuccess(results) {
  var topItem;

  if (results && results.items && results.items.length > 0) {
    topItem = results.items[0];

    if (topItem && topItem.id && topItem.id.kind === "youtube#video") {
      port.postMessage({id: topItem.id.videoId});
    }
  }
}