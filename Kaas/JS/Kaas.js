var yellow = prompt ('Is de kaas geel?');

if (yellow == 'ja') {

	var holes = prompt ('Zitten er gaten in?');

}else if (yellow == 'nee') {

	var blue = prompt ('Heeft de kaas blauwe schimmels?');
}




if (holes == 'ja') {

	var overpriced = prompt ('Is de kaas belachelijk duur?');

}else if (holes == 'nee') {

	var hard = prompt ('Is de kaas hard als steen?');
}




if (overpriced == 'ja') {

	document.write ("emmenthaler.");
}else if (overpriced == 'nee') {
	document.write ("Leerdammer.");
}




if (hard == 'ja') {
	document.write ('Parmigiano Reggiano.');
}else if (hard == 'nee') {
	document.write ('Goudse kaas.');
}




if (blue == 'ja') {
	var crust = prompt ('Heeft de kaas een korst?');
}else if (blue == 'nee') {
	var crust2 = prompt ('Heeft de kaas een korst?');
}





if (crust == 'ja') {
	document.write ('Bleu de Rochbaron.');
}else if (crust == 'nee') {
	document.write ('Foume d\'Ambert.');
}




if (crust2 == 'ja') {
	document.write ('Camembert.');
}else if (crust2 == 'nee') {
	document.write ('Mozzarella.')
}