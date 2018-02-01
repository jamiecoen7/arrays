//Create an array and assign its values 
var colors = new Array ('white',
						'black',
						'red');
	colors.push("purple");
	
//show the first item from the array
var el = document.getElementById('colors');
el.textContent = colors[3];
