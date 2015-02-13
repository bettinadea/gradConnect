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
	$(".thumbnail").click(graduateClick);
}

function graduateClick(e) {
	e.preventDefault();
    
    var containingProject = $(this).closest(".graduate");
    var description = $(containingProject).find(".graduate-description");
    if(description.is(':visible')) {
       description.fadeOut();
    } else {
       description.fadeIn();
    }
}