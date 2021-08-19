const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo()
{
	navigator.mediaDevices.getUserMedia({video:true, audio:false})
		.then(localMediaStream => {
			console.log(localMediaStream);
			video.srcObject = localMediaStream;
			video.play();
		})
		.catch(err => {

			console.error(`Oh No!!`, err);
		})

}

function paintToCanvas()
{
	const width = video.videoWidth;
	const height = video.videoHeight;

	console.log(width,height);

	canvas.width = width;
	canvas.height = height;

	setInterval(() => {
		ctx.drawImage(video, 0,0 , width, height);
		let  pixels = ctx.getImageData(0,0,width,height);
		// console.log(pixels);
		pixels = redEffect(pixels);

		ctx.putImageData(pixels,0,0);
	});
}


//the button has been added the onClick attribute via html, so the function shall be called even if no event listeners have been added to the button.
function takePhoto()
{
	snap.currentTime = 0;
	snap.play();

	const data = canvas.toDataURL('image/jpeg');
	console.log(data);

	const link = document.createElement('a');// creates an <a> element
	link.href = data;
	link.setAttribute('download', 'handsome');
	// link.textContent = 'Download Image'; //if img src is provided, no need for text content.
	link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
	strip.insertBefore(link, strip.firstChild);

}

function redEffect(pixels)
{
	for(let i = 0; i < pixels.data.length; i+=4)
	{
		pixels.data[i + 0] = pixels.data[i + 0] + 100; //red 
		pixels.data[i + 1] = pixels.data[i + 1] - 50; //green
		pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //blue
	}
	return pixels;

}

getVideo();

video.addEventListener('canplay', paintToCanvas);