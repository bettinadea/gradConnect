'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$(".thumbnail").click(professorClick);
}

function professorClick(e) {
	e.preventDefault();
 
  var containingProject = $(this).closest(".professor");
  var description = $(containingProject).find(".professor-description");
  if(description.is(':visible')) {
     description.fadeOut();
  } else {
     description.fadeIn();
  }
}