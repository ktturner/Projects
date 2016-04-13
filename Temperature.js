

function coat(temperature, rain){
	if (temperature < 0 || rain == 'yes') {
		document.write('Stay inside!')
}
else if (temperature < 30 || rain == 'no') {
		document.write('Please wear a coat and a hat. You need to stay warm!');
}
else if (temperature < 50 || rain == 'no'){
	document.write('Please put on a coat. It is cold outside!');
}
else {
	document.write('It\'s nice outside, wear what you want.')
}
}

coat(50,'yes');