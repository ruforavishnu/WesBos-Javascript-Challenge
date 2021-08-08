console.log('testing if script loaded');

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;
// ctx.globalCompositeOperation = 'destination-over';
ctx.globalCompositeOperation = 'luminosity';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;



function draw(e)
{
	if(!isDrawing)
		return;

	ctx.beginPath();
	ctx.strokeStyle = `hsl(${hue}, 100%,50%)`;
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	console.log(e);
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;

	if(hue>=360)
		hue = 0;

	// direction = (ctx.lineWidth >= 100 || ctx.lineWidth <= 1)? !direction : direction;

	if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
	{
		direction = !direction;
	}

	// ctx.lineWidth = direction ? ctx.lineWidth+=1 : ctx.lineWidth-=1;

	if(direction)
	{
		ctx.lineWidth++;	
	}
	else
	{
		ctx.lineWidth--;
	}

	


}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {

	isDrawing=true;
	[lastX, lastY] = [e.offsetX, e.offsetY];

});
canvas.addEventListener('mouseup', () => isDrawing=false);
canvas.addEventListener('mouseout', () => isDrawing=false);
