/*Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build our function */

function togglePlay()
{
	if(video.paused)
	{
		video.play();
	}
	else
	{
		video.pause();
	}
}

function updateButton()
{
	console.log('update button method invoked');
	const icon = this.paused ? '►' : '❚ ❚';
	toggle.textContent = icon;
}

function skip()
{
	
	console.log('skipping from:'+video.currentTime);
	video.currentTime += parseFloat(this.dataset.skip);
	console.log('skipped to:'+video.currentTime);

}

let rangeChangeable = false;

function handleRangeUpdate()
{
	
	if(rangeChangeable)
	{
	
		video[this.name] = this.value;	
	}
	
}

function handleProgress()
{
	const percent = (video.currentTime/video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;

}

let isProgressScrubable = false;
let isMouseInsideProgressBar = false;



function scrub(e)
{
	console.log('isProgressScrubable:'+isProgressScrubable);
	console.log('isMouseInsideProgressBar:'+isMouseInsideProgressBar);
	if( isProgressScrubable)
	{
		
		const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
		video.currentTime = scrubTime;	
	}
	
}
/*Hook up the event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousedown', () => {

	rangeChangeable = true;

}));
ranges.forEach(range => range.addEventListener('mouseup', () => {

	rangeChangeable = false;

}));

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', scrub);
progress.addEventListener('mousedown', () => {

	console.log('mouse down event');
	isProgressScrubable = true;

});
progress.addEventListener('mouseup ', () => {

	isProgressScrubable = false;

});
progress.addEventListener('mouseout ', () => {

	isMouseInsideProgressBar = false;
	console.log('mouse outed  progress bar');

});
progress.addEventListener('mouseover ', () => {

	console.log('mouse entered progress bar');
	isMouseInsideProgressBar = true;

});