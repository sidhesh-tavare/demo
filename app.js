//Copyright: Sidhesh

const apiKey = 'AIzaSyBIELAXb7nSRBSpwNTfsjFMXqSuNaca9dU';
const neetcodeChannelId = 'UCevUmOfLTUX9MNGJQKsPdIA';
const codingWithLarryChannelId = 'UCl3tJFKsFrw2p_Wxf1YDSow';

function searchVideo() {
    const keyword = document.getElementById('keyword').value;
    clearResults();

    // Search Neetcode channel
    searchYouTube(neetcodeChannelId, keyword, 'neetcodeResult');

    // Search Coding with Larry channel
    searchYouTube(codingWithLarryChannelId, keyword, 'larryResult');
}

function searchYouTube(channelId, query, resultElementId) {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&q=${query}&part=snippet&type=video&maxResults=1`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const videoContainer = document.getElementById(resultElementId);
        if (data.items.length > 0) {
          const video = data.items[0];
          const videoId = video.id.videoId;
          const videoTitle = video.snippet.title;
          const videoThumbnail = video.snippet.thumbnails.high.url;

          videoContainer.innerHTML = `
            <img src="${videoThumbnail}" alt="${videoTitle}" class="thumbnail">
            <h3>${videoTitle}</h3>
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
              <button>Watch Now</button>
            </a>
          `;
        } else {
          videoContainer.innerHTML = `<p>No results found</p>`;
        }
      })
      .catch(error => console.error('Error:', error));
}

function clearResults() {
    document.getElementById('neetcodeResult').innerHTML = '';
    document.getElementById('larryResult').innerHTML = '';
}
