    const video = document.getElementById('liveTv');
    let hls;

    function playChannel(videoSrc) {
      if (Hls.isSupported()) {
        if (hls) {
          hls.destroy();
        }
        hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play();
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', function () {
          video.play();
        });
      } else {
        alert("Your browser does not support HLS playback.");
      }
    }

    // Optional: Load a default channel
    playChannel('https://dzkyvlfyge.erbvr.com/PeaceTvBangla/index.m3u8');
