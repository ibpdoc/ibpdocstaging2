
// ===== Scroll to Top ==== 
// $('div.body-layout').scroll(function(){
//


// ===== Scroll to Top ==== 
// $(window).scroll(function() {
	
//$('div.body-box').scroll(function(){
  //  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    //    $('#return-to-top').fadeIn(200);    // Fade in the arrow
  //  } else {
    //    $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  //  }
//});
//$('#return-to-top').click(function() {      // When arrow is clicked
  //  $('body,html').animate({
    //    scrollTop : 0                       // Scroll to top of body
   // }, 500);
// });









//============= new from copilot DOESNT WORK ==============
//document.addEventListener("DOMContentLoaded", function() {
//	console.log("Script loaded"); // Initial test log

	// Get the button
//	let mybutton = document.getElementById("return-to-top");

	// When the user scrolls down 20px from the top of the document, show the button
//	window.onscroll = function() {
//		console.log("Scroll detected"); // Initial test log
//		scrollFunction();
//	};

//	function scrollFunction() {
//		console.log("scrollTop:", document.documentElement.scrollTop); // Debug log
//		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//			mybutton.style.display = "block";
//			console.log("Button unhidden"); // Debug log
//		} else {
//			mybutton.style.display = "none";
//			console.log("Button unhidden"); // Debug log
//		}
//	}

	// When the user clicks on the button, scroll to the top of the document
//	mybutton.onclick = function() {
//		document.body.scrollTop = 0; // For Safari
//		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//	}
//});



(function () {
	if ($(".body-container").length === 1) {
		var bodyContainer = $('.body-container')[0];
		//Get the button
		let mybutton = document.getElementById("return-to-top"); // this is from other script

		// var mybutton = document.createElement("button");  // Create a <button> node
		// var textnode = document.createTextNode("Top"); // Create a text node
		// mybutton.appendChild(textnode);  // Append the text
		// mybutton.setAttribute("id", "myBtn");  // Set id
		mybutton.addEventListener("click", topFunction); // Set onclick event handler
		bodyContainer.appendChild(mybutton);    // Append button element to main element

	// When the user scrolls down 20px from the top of the document, show the button
	//Both functions are used based on the responsive portion of the output
		bodyContainer.onscroll = function() {scrollFunction()};
		window.onscroll = function() {scrollFunctionx()};
		function scrollFunction() {
			if (bodyContainer.scrollTop > 20 || document.documentElement.scrollTop > 20) {
					mybutton.style.display = "block";
				} else {
					mybutton.style.display = "none";
            }
        }
		function scrollFunctionx() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
					mybutton.style.display = "block";
				} else {
					mybutton.style.display = "none";
				}
			}
		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
			$('html, body').animate({ scrollTop: 0 }, "smooth");
			$('html, documentElement').animate({ scrollTop: 0 }, "smooth");
			$('.body-container').animate({ scrollTop: 0 }, "smooth");
		}
	}
})();
