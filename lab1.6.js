var InvoerGetal, array = [];
 
InvoerGetal = prompt("voor een getal in");
for (var rijen = 0; rijen <= InvoerGetal; rijen++) {  //dit zorgt voor rijen
	array.push(rijen)	
	}

for (var rijen = InvoerGetal; rijen >= 0; rijen--) {  //dit zorgt voor rijen
	document.write (array + "<br/>");	
	array.pop();
}

