var tag = document.createElement('script');
      // 2. This code loads the IFrame Player API code asynchronously.
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        //<div id="player"></div>
       new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
          playerVars: { //영상을 재생하기 위한 여러가지 변수들
            autoplay: true, //자동재생여부
            loop: true, //반복재생여부
            playList: 'An6LvWQuJ_8' //반복재생할 유튜브 영상 ID목록
          },
          events: {
            onReady: function (event) {
              event.target.mute() //음소거 
            }
          }
        });
      }