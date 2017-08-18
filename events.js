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
	if(event.target.className === "article-section-intro") {
		targetOutput.innerHTML = "You clicked on the Introduction section!";
	}else if (event.target.className === "article-section-body") {
		targetOutput.innerHTML = "You clicked on the Body section!";
	}else if (event.target.className === "article-section-sec1") {
		targetOutput.innerHTML = "You clicked on Section 1!";
	}else if (event.target.className === "article-section-sec2") {
		targetOutput.innerHTML = "You clicked on Section 2!";	
	}else if (event.target.className === "article-section-sec3") {
		targetOutput.innerHTML = "You clicked on Section 3!";	
	}else if (event.target.className === "article-section-conclusion") {
		targetOutput.innerHTML = "You clicked on the Conclusion section!";	
	}			
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

//INPUT KEYDOWN EVENT
inputText.addEventListener("keydown", function(event) {
	if(event.keyCode === 13) {
	var	text = inputText.value;
	targetOutput.innerHTML = text;

	}
})

//CHANGES GUINEA PIG TEXT TO BLUE
colorBtn.addEventListener("click", function(event) {
	if(event.target.id === "add-color") {
		guineaDiv.style.color = "blue";
	}
});

//INCREASES GUINEA PIG FONT SIZE
hulkifyBtn.addEventListener("click", function(event) {
	if(event.target.id === "make-large") {
		guineaDiv.style.fontSize = "40px";
	}
});

//ADDS BORDER TO GUINEA PIG DIV
borderBtn.addEventListener("click", function(event) {
	if(event.target.id === "add-border") {
		guineaDiv.style.border = "2px dotted purple";
	}
});

//ADDS BORDER RADIUS TO GUINEA PIG DIV
roundBtn.addEventListener("click", function(event) {
	if(event.target.id === "add-rounding") {
		guineaDiv.style.borderRadius = "10px";
	}
});











