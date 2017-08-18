function showME(e) {
	e.target.previousSibling.classList.remove("hidden");

};

document.body.addEventListener("click", function(event) {
	if(event.target.className === "planetImg") { 
		showME(event); 
	}
});