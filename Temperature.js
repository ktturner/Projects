
function coat(temperature, rain){
	if 
	if (temperature < 0 || rain == 'yes') {
		document.write('Stay inside!')
		/* I see what you did here. You took the || rain == 'no' out by making a larger if else statement. I don't know 
		all of the technical jargon to explain what is happening, but I do get it. Thanks for showing me a different
		way to think about this problem!*/
	} else {
		if (temperature < 30 ) {
			document.write('Please wear a coat and a hat. You need to stay warm!');
		}
		else if (temperature < 50){
			document.write('Please put on a coat. It is cold outside!');
		}
		else {
			document.write('It\'s nice outside, wear what you want.')
		}
	}
}

coat(50,'yes');
