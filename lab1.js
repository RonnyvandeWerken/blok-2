var dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

document.getElementById('week1').innerHTML = dagen;

document.getElementById('week2').innerHTML = dagen[0] + ',' + dagen[1] + ',' + dagen[2] + ',' + dagen[3] + ',' + dagen[4];

document.getElementById('week3').innerHTML = dagen[5] + ',' + dagen[6];

document.getElementById('week4').innerHTML = dagen[6] + ',' + dagen[5] + ',' + dagen[4] + ',' + dagen[3] + ',' + dagen[2] + ',' + dagen[1] + ',' + dagen[0];

document.getElementById('week5').innerHTML = dagen[6] + ',' + dagen[5];
