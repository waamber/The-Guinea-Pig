var sections = document.getElementById('sections');
var targetOutput = document.getElementById('output-target');
var h1 = document.getElementById('page-title');
var inputText = document.getElementById('keypress-input');
var guineapig = document.getElementById('guinea-pig');
var guineaDiv = document.querySelector(".guineaDiv");
var colorBtn = document.getElementById('add-color');
var hulkifyBtn = document.getElementById('make-large');
var borderBtn = document.getElementById('add-border');
var roundBtn = document.getElementById('add-rounding');

var inputString = "";
targetOutput.innerHTML = inputString;

//SECTION CLICK EVENTS
sections.addEventListener("click", function(event){
	console.log(event);
	targetOutput.innerHTML = `You clicked on the ${event.target.innerHTML} section!`;
			
});

//H1 MOUSEOVER/OUT EVENTS
h1.addEventListener("mouseover", function(event){
	if(event.target.id === "page-title") {
		targetOutput.innerHTML = "You moved your mouse over the header!";
	}
});

h1.addEventListener("mouseout", function(event){
	if(event.target.id === "page-title") {
		targetOutput.innerHTML = "You left me!!";
	}
});

//INPUT ONKEYUP EVENT
inputText.onkeyup = function() {
	targetOutput.innerHTML = inputText.value;
};


//CHANGES GUINEA PIG TEXT TO BLUE
colorBtn.addEventListener("click", function(event) {
	if(event.target.id === "add-color") {
		guineaDiv.classList.add('blue');
	}
});

//INCREASES GUINEA PIG FONT SIZE
hulkifyBtn.addEventListener("click", function(event) {
	if(event.target.id === "make-large") {
		guineaDiv.classList.add('fontSize');
	}
});

//ADDS BORDER TO GUINEA PIG DIV
borderBtn.addEventListener("click", function(event) {
	if(event.target.id === "add-border") {
		guineaDiv.classList.add('border');
	}
});

//ADDS BORDER RADIUS TO GUINEA PIG DIV
roundBtn.addEventListener("click", function(event) {
	if(event.target.id === "add-rounding") {
		guineaDiv.classList.add('rounded');
	}
});

function styles() {
	var sectionChild = sections.children;
	for(var i = 0; i < sectionChild.length; i++) {
	if(i === 2) {
		sectionChild[i].classList.add("bold");
	}else if (i === 4) {
		sectionChild[i].classList.add("italic", "bold");
	}
}
};

styles(sections);









