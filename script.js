function playVideo(videoSrc) {
  const videoPlayer = document.getElementById('video-player');
  videoPlayer.src = videoSrc;
  videoPlayer.play();
}
