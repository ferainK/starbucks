const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  //<div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true,
      //반복하는 경우, 반복할 영성 명기 필요
      loop: true,
      playlist: 'An6LvWQuj_8',
    },
    events: {
      onReady: function(event){
        event.target.mute()
      }
    }
  });
}