var publication = document.getElementById("publication");
var change = document.getElementById("change");
		
var f =	publication.addEventListener("click", click);

var project = document.getElementById("project");
var change2 = document.getElementById("change2");

		project.addEventListener("click", click2);

var img = document.getElementsByClassName("home");
		img[0].addEventListener("mouseover",mouseover);
		img[0].addEventListener("mouseout",mouseout);


function click(){
	change.style.color = "#3551b7f2";

	sleep(1200).then(() => {change.style.color = 'black' 
							change.style.font = 'bold';})
}

function mouseover(){
	img[0].style.transitionDuration = '0.9s'
	img[0].style.background = "url('./img/fondo2.JPG')";
	img[0].style.backgroundSize = 'cover';
	img[0].style.backgroundPosition = 'center center';
	img[0].style.height = '50vh'; 
	
}
function mouseout(){
	img[0].style.transitionDuration = '0.9s'
	img[0].style.background = "url('./img/fondo.JPG')";
	img[0].style.backgroundSize = 'cover';
	img[0].style.backgroundPosition = 'center center';
}

function click2(){
	change2.style.color = "#8cd95d";

	sleep(1200).then(() => {change2.style.color = '#fff' 
							change2.style.font = 'bold';})
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

