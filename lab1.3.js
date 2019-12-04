var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function plus(getal1, getal2) {
	document.getElementById("plus").innerHTML += getal1 + "+" + getal2 + "=" + (getal1+getal2) + "<br/>";
}

function min(getal2, getal1) {
	document.getElementById("min").innerHTML += getal2 + "-" + getal1 + "=" + (getal2-getal1) + "<br/>";
}

function keer(getal1, getal2) {
	document.getElementById("keer").innerHTML += getal1 + "x" + getal2 + "=" + (getal1*getal2) + "<br/>";
}

function delen(getal2, getal1) {
	document.getElementById("delen").innerHTML += getal2 + ":" + getal1 + "=" + (getal2/getal1) + "<br/>";
}


for (var i = 0; i < arrayEen.length; i++) {
	plus(arrayEen[i], arrayTwee[i]);

}

document.write("<br/>");

for (var i = 0; i < arrayEen.length; i++) {
	min(arrayTwee[i], arrayEen[i]);
}

document.write("<br/>");

for (var i = 0; i < arrayEen.length; i++) {
	keer(arrayEen[i], arrayTwee[i]);
}

document.write("<br/>");

for (var i = 0; i < arrayEen.length; i++) {
	delen(arrayTwee[i], arrayEen[i]);
}