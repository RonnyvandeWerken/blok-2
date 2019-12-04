var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8];

function tafel2(getal1, getal2) {
	document.getElementById("tafelvan2").innerHTML += getal1 + "x" + getal2 + "=" + (getal1*getal2) + "<br/>";
}

function tafel4(getal1, getal2) {
	document.getElementById("tafel4").innerHTML += getal1 + "x" + getal2 + "=" + (getal2*getal1) + "<br/>";
}

function tafel6(getal1, getal2) {
	document.getElementById("tafel6").innerHTML += getal1 + "x" + getal2 + "=" + (getal1*getal2) + "<br/>";
}

function tafel8(getal1, getal2) {
	document.getElementById("tafel8").innerHTML += getal1 + "x" + getal2 + "=" + (getal2*getal1) + "<br/>";
}


for (var i = 0; i < arrayEen.length; i++) {
	tafel2(arrayEen[i], arrayTwee[0]);
}

document.write("<br/>");

for (var i = 0; i < arrayEen.length; i++) {
	tafel4(arrayEen[i], arrayTwee[1]);
}

document.write("<br/>");

for (var i = 0; i < arrayEen.length; i++) {
	tafel6(arrayEen[i], arrayTwee[2]);
}

document.write("<br/>");

for (var i = 0; i < arrayEen.length; i++) {
	tafel8(arrayEen[i], arrayTwee[3]);
}