var bgimg = document.getElementById('imagebg')
var smimg = document.getElementById('imgsmall')

var button1color = document.getElementById('button1')
var button2color = document.getElementById('button2')
var button3color = document.getElementById('button3')

var buttonclicked = 0;

var countbutton1 = 0;
var countbutton2 = 0;
var countbutton3 = 0;

button1.onclick = button1click;
button2.onclick = button2click;
button3.onclick = button3click;

function button1click() {
	countbutton1 += 1;
	button1.innerHTML = countbutton1;
	bgimg.src = 'images/bg1.jpg'
	smimg.src = 'images/1.jpg'
	resetdButtons()
	button1color.style.backgroundColor = "red"
	button1color.disabled = true

}

function button2click() {
	countbutton2 += 1;
	button2.innerHTML = countbutton2;
	bgimg.src = 'images/bg2.jpg'
	smimg.src = 'images/2.jpg'
	resetdButtons()
	button2color.style.backgroundColor = "red"
	buttonclicked =2;
	button2color.disabled = true
}

function button3click() {
	countbutton3 += 1;
	button3.innerHTML = countbutton3;
	bgimg.src = 'images/bg3.jpg'
	smimg.src = 'images/3.jpg'
	resetdButtons()
	 button3color.style.backgroundColor = "red"
	buttonclicked =3;
	button3color.disabled = true
}

function resetdButtons(){
 button1color.style.backgroundColor = "green"
  button2color.style.backgroundColor = "green"
   button3color.style.backgroundColor = "green"
   button1color.disabled = false
   button2color.disabled = false
   button3color.disabled = false
}