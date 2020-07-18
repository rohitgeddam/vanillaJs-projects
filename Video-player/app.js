const videoControls = document.getElementById('video-controls');
const video = document.querySelector('video');
const pauseplay = document.querySelector('#playpause');
videoControls.setAttribute('data-state', 'visible');

playpause.addEventListener('click', function(e) {
	if (video.paused || video.ended) video.play();
	else video.pause();
});

var changeButtonState = function(type) {
	// Play/Pause button
	if (type == 'playpause') {
		if (video.paused || video.ended) {
			playpause.setAttribute('data-state', 'play');
		} else {
			playpause.setAttribute('data-state', 'pause');
		}
	} else if (type == 'mute') {
		// Mute button
		mute.setAttribute('data-state', video.muted ? 'unmute' : 'mute');
	}
};

video.addEventListener(
	'play',
	function() {
		changeButtonState('playpause');
	},
	false
);
video.addEventListener(
	'pause',
	function() {
		changeButtonState('playpause');
	},
	false
);
stop.addEventListener('click', function(e) {
	video.pause();
	video.currentTime = 0;
	progress.value = 0;
	// Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
	changeButtonState('playpause');
});
mute.addEventListener('click', function(e) {
	video.muted = !video.muted;
	changeButtonState('mute');
});
