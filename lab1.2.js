var namen = [];

var naam

while (naam != "stop"){
	naam = prompt("wat zijn de namen die u wilt toevoegen minimaal 3 ");
	if (naam == "stop") {
	document.getElementById('namen1').innerHTML = namen;
	}
	else {
	namen.push(naam);	
	}
}

reverse();

//document.getElementById('namen2').innerHTML = namen.reverse;

function reverse() {
	namen.reverse();
	document.getElementById('namen2').innerHTML = namen;
}