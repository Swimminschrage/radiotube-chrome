function _radioTubeClick(event) {
  $.get("https://www.googleapis.com/youtube/v3/search", {
    part: "snippet",
    q: _getCurrentArtist() + " " + _getCurrentSong(),
    type: "video",
    key: "AIzaSyD-VyMZwDGHt0PyI3i5yzmH0eEZgj1z1_0"
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