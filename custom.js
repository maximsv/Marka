// var text = document.querySelector(".active");
// text.onclick = function () {
// 	text.innerHTML = "HI";
// 	text.className = "nav-link";
// 	}

	//  $("#jsmenu").text("Hi");
	var box = $("#jsmenu"); 
	var hovers = $(".nave");
   box.click(function () {
		 box.addClass("nav-link-blue");		
	 });
	box.dblclick(function () {
		 box.removeClass("nav-link-blue");
	});

hovers.click(function() {
	hovers.toggleClass("nave nav-link");
		hovers.removeClass("nave");
});