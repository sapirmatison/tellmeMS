
$(document).ready(function () {
	$("#TLM").click(function () {
		window.location.href = "http://www.hit.ac.il/telem/overview"
	});

	$(".close").click(function () {
		var myPopname = $(this).attr('id');
		if (myPopname == "closePurple") {
			document.getElementById("popupBasicPurpel").hidden = true;
		} else if (myPopname == "closeGreen") {
			document.getElementById("popupBasicGreen").hidden = true;
		} else if (myPopname == "closeBlue") {
			document.getElementById("popupBasicBlue").hidden = true;
		} else if (myPopname == "closePink") {
			document.getElementById("popupBasicPink").hidden = true;
		} else if (myPopname == "closeOrange") {
			document.getElementById("popupBasicOrange").hidden = true;
		} else if (myPopname == "closeOdot") {
			document.getElementById("popupBasicOdot").hidden = true;
		}
	});

	// הצגת הפופאפים 
	$("#purpelClick").click(function () {
		document.getElementById("popupBasicPurpel").hidden = false;
	});
	$("#greenClick").click(function () {
		document.getElementById("popupBasicGreen").hidden = false;
	});
	$("#blueClick").click(function () {
		document.getElementById("popupBasicBlue").hidden = false;
	});
	$("#pinkClick").click(function () {
		document.getElementById("popupBasicPink").hidden = false;
	});
	$("#orangeClick").click(function () {
		document.getElementById("popupBasicOrange").hidden = false;
	});
	$("#odotClick").click(function () {
		document.getElementById("popupBasicOdot").hidden = false;
	});

});


