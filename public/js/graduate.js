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
	$(".graduate").click(graduateClick);
}

function graduateClick(e) {
	e.preventDefault();
    
    var containingProject = $(this).closest(".graduate");
    var description = $(containingProject).find(".graduate-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='graduate-description'><p>{{description}}</p></div>");
    } else if(description.is(':visible')) {
       description.fadeOut();
    } else {
       description.fadeIn();
    }
}