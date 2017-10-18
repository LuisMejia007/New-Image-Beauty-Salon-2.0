/** JavaScript & jQuery Code **/

/*********** Navigation Bar Services Click ***************/

$(document).ready(function(){
	$('#services_link').click(function(){
		if($(window).width() <= 860)
		{
			$('#services_submenu').slideToggle(300);
		}
	});
});

var image_array = 
[
	"Image/btysalon.jpg", 
	"Image/Peticure.jpg", 
	"Image/hair_cut.jpg",
	"Image/scowling_girl_large.jpg"
];
var current_image = 0;
function prevImg()
{
	var images = document.getElementById("slideshow");
	current_image--;
	if(current_image < 0)
	{
		current_image = image_array.length - 1;
		images.src = image_array[current_image];
	}
	else { images.src = image_array[current_image]; }  
}

function nextImg()
{
	var images = document.getElementById("slideshow");
	current_image+=1;
	if(current_image > image_array.length - 1)
	{
		current_image = 0;
		images.src = image_array[current_image];
	}
	else { images.src = image_array[current_image]; } 
}



/* Responsive Nav-Bar */
$(document).ready(function()
{
	$('.nav-button').click(function()
	{
		$("header nav ul").toggleClass("open");
	});

});

$(document).ready(function(){
	$("#bwd_btn").click(function(){
		prevImg();
	});
});
$(document).ready(function(){
	$("#fwd_btn").click(function(){
		nextImg(); 
	});
});

/*Show Hidden Info Functions*/
$(document).ready(function()
{
	$('.ironed_hair_pane').click(function(){
		$('.ironed_hair_info').toggleClass('show');
	});
	$('.wavy_hair_pane').click(function(){
		$('.wavy_hair_info').toggleClass('show');
	});
	$('.perm_hair_pane').click(function(){
		$('.perm_hair_info').toggleClass('show');
	});
	$('.highlights_hair_pane').click(function(){
		$('.highlights_hair_info').toggleClass('show');
	});
});



/* Sub-menu Functionality */
$(document).ready(function(){
	$('#women_menu_button').click(function(){
		if($(window).width() < 860)
		{
			$('.women_submenu').slideToggle(900);
		}
	});
});

$(document).ready(function(){
	$('#men_menu_button').click(function(){
		if($(window).width() < 860)
		{
			$('.men_submenu').slideToggle(900);
		}
	});
});
$(document).ready(function(){
	$('#kids_menu_button').click(function(){
		if ($(window).width() < 860)
		{
			$('.kids_submenu').slideToggle(900);
		}
	});
});


/*
	Exclusive Functionalities Style Page
	------------------------------------
	The following functions ensure that the sub-menu displays remain exclusive to their respective screen widths. 
	A window size of 880px wide will not use these functions, instead it will use the functions that are above. 
	
	However a window size of 1280px or wider will use these functionalities below. 
*/

$(document).ready(function(){
	$('#women_menu_button').click(function(){

		if($(window).width() >= 860)
		{
			$('.women_submenu').addClass('open');
			$('.men_submenu').removeClass('open'); 
			$('.kids_submenu').removeClass('open'); 
		}

	});
});


$(document).ready(function(){
	$('#men_menu_button').click(function(){

		if($(window).width() >= 860)
		{
			$('.men_submenu').addClass('open');				
			$('.women_submenu').removeClass('open'); 
			$('.kids_submenu').removeClass('open'); 
		}
	});
});

$(document).ready(function(){
	$('#kids_menu_button').click(function(){
		if($(window).width() >= 860)
		{
			$('.kids_submenu').addClass('open');
		 	$('.men_submenu').removeClass('open'); 
			$('.women_submenu').removeClass('open'); 
		}

	});
});

/******** EOF Exclusive Functionalities *********/
function slideshow()
{
	var salon_slideshow = document.getElementById('slideshow');
	var current_image = 0; 
	for(var i = 0; i < image_array.length; i++)
	{
		salon_slideshow.src = image_array[i];
	}
}


/*** Nail Designs jQuery ***/

$(document).ready(function(){
	$('#foot_spa_btn').click(function(){
		$('.foot_spa_info').slideToggle(900);
	});
});
$(document).ready(function(){
	$('#manicure_btn').click(function(){
		$('.manicure_info').slideToggle(900);
	});
});

$(document).ready(function(){
	$('#peticure_btn').click(function(){
		$('.peticure_info').slideToggle(900);
	});
});




