console.log('testing if script loaded');

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');



function handleCheck(e)
{
	let inBetween = false;
	//Check if shift key down AND check that they are checking and not unchecking
	if(e.shiftKey  && this.checked)
	{
		//go ahead and check all the checkboxes in betweent
		//loop over every single checkbox

		checkboxes.forEach(checkbox => {

			console.log(checkbox);
			if(checkbox === this  || checkbox === lastChecked)
			{
				inBetween = !inBetween;
				console.log('starting to check them inbetween');
			}

			if(inBetween)
			{
				checkbox.checked = true;
			}
		});
	}

	lastChecked = this;

}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));