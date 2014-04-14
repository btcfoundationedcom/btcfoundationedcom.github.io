/*global jQuery:false , global mocha:false*/
jQuery(document).ready(function()
{

"use strict";
/* Availabe Easing Methods 
1. linear
2. swing
3. easeInQuad
4. easeOutQuad
5. easeInOutQuad
6. easeInCubic
7. easeOutCubic
8. easeInOutCubic
9. easeInQuart
10. easeOutQuart
11. easeInOutQuart
12. easeInQuint
13. easeOutQuint
14. easeInOutQuint
15. easeInExpo
16. easeOutExpo
17. easeInOutExpo
18. easeInSine
19. easeOutSine
20. easeInOutSine
21. easeInCirc
22. easeOutCirc
23. easeInOutCirc
24. easeInElastic
25. easeOutElastic
26. easeInOutElastic
27. easeInBack
28. easeOutBack
29. easeInOutBack
30. easeInBounce
31. easeOutBounce
32. easeInOutBounce
*/
if(typeof mocha !== 'undefined')
{
var Speed = mocha.speed;
var Animation = mocha.ease;
var template_url = mocha.template_url;
var admin_ajax = mocha.admin_ajax;
var mainThemeColor = mocha.mainColor;
}
else
{
var Speed = 300;
var Animation = 'swing';
var mainThemeColor = '0078a4';
}

 /* -------------------------------------------------------------- 
 	fade In content after page loads
  -------------------------------------------------------------- */
jQuery('.preload img').load( function(){
	jQuery(this).fadeIn(Speed);
});

/* -------------------------------------------------------------- 
Meida Element
-------------------------------------------------------------- */
jQuery('audio , video').mediaelementplayer({

loop: false,
enableAutosize: false,
features: ['playpause','progress', 'current' , 'volume'] ,
audioHeight: 40,
alwaysShowHours: false

});


/* -------------------------------------------------------------- 
Blog 
-------------------------------------------------------------- */
jQuery('.blog-item .post-image').each(function(){
	var item = jQuery(this);
	item.hover(function(){
			item.find('a.image').stop().animate({
				opacity: '0.1'
			}, {duration: 300});
			jQuery(this).find('> .icon').stop().animate({
	    		top: '0px'
	    	} , {duration: 200});
	},  function(){
			item.find('a.image').stop().animate({
				opacity: '1'
			} , {duration: 300});
			jQuery(this).find('> .icon').stop().animate({
	    		top: '-100%'
	    	} , {duration: 200});
	});
});

/* -------------------------------------------------------------- 
Portfolio
-------------------------------------------------------------- */
jQuery('.portfolio-item').each(function(){

	var obj = jQuery(this) ,
	w = jQuery(this).find('a.image img').width() , 
	h = jQuery(this).find('a.image img').height();

	

	jQuery(this).hover(function(){


	    	jQuery(this).find('> a.image').stop().animate({
	    		opacity: '0.1'
	    	} , {duration: 150});
	    	jQuery(this).find('> .title').stop().delay(100).animate({
	    		top: '45%'
	    	} , {duration: 300});
	    	jQuery(this).find('> .icon').stop().animate({
	    		top: '33%'
	    	} , {duration: 350});
	    	jQuery(this).find('a.image img').stop().animate({
	    		// width: '120%',
	    		// height: '120%',
	    		// marginTop: '-5%',
	    		// marginLeft: '-5%'
	    	} , {duration: 350})
	    } , function(){
	    	

	    	jQuery(this).find('> a.image').stop().delay(150).animate({
	    		opacity: '1'
	    	} , {duration: 50});
	    	jQuery(this).find('> .title').stop().delay(50).animate({
	    		top: '100%'
	    	} , {duration: 0});
	    	jQuery(this).find('> .icon').stop().animate({
	    		top: '-100%'
	    	} , {duration: 0});
	    	jQuery(this).find('a.image img').stop().delay(300).animate({
	    		// width: w,
	    		// height: h,
	    		// marginTop: '0px',
	    		// marginLeft: '0px'
	    	} , {duration: 350})
	    });	


});




// Isotope
jQuery('.portfolio-sortlist ul').find('li:first a').addClass('active');	
jQuery('.portfolio-page').isotope({ 

			  		filter: '*',
			      	animationEngine : 'best',
			                         		animationOptions: {
			                                duration: 750 ,
			                                easing : Animation, 
			                                queue: false
			                             } 
			    });
jQuery('.page .portfolio-sortlist a').on('click',function(){
				// switch active class
				jQuery(' .portfolio-sortlist a').removeClass('active');
				jQuery(this).addClass('active');	
			  	

			  	var selector = jQuery(this).attr('data-sort');
			  	if(selector !== '*') selector = '.' + selector;
			  	jQuery(this).parent().find('a').removeClass('active');
			  	jQuery(this).addClass('active');
			  	jQuery('.portfolio-page').isotope({ 

			  		filter: selector,
			  		itemSelector : '.portfolio-item',
			      	animationEngine : 'best',
			                         		animationOptions: {
			                                duration: 750 ,
			                                easing : Animation, 
			                                queue: false
			                             } 
			    });
			  	return false;
				});


 /* -------------------------------------------------------------- 
Gallery
-------------------------------------------------------------- */
jQuery('.flexslider').flexslider({
     animation: "fade",
     touch : true ,
     easing : Animation ,
     animationSpeed : 1000,
     keyboard : true,
     nextText : '' ,
     prevText : '',
     slideshow: true,                
     slideshowSpeed: 5000,
     controlNav: false,
     directionNav: true
});



 /* -------------------------------------------------------------- 
 	Select
  -------------------------------------------------------------- */
jQuery('.contact-form select').each(function(){
	var item = jQuery(this) ,
	span = '<div class="bg"></div><span id="dropdownBu" class="arrow"></span>',
	itemHTML = item.html();
	item.wrap('<div class="select"></div>').before(span);


});

/* -------------------------------------------------------------- 
	Menu
-------------------------------------------------------------- */
if(jQuery(window).width() > 768)
{

		jQuery('header nav.menu ul li').hover(function(){

				jQuery(this).find(' > ul').stop().fadeIn(Speed);


		} ,function(){
				if(jQuery(window).width() > 768){
						jQuery(this).find(' > ul').stop().fadeOut(Speed);
				}
		});
}else{
		jQuery('nav.menu ul li.toggle').css('display' , 'block');
		jQuery('nav.menu ul li:not(.toggle)').css('display' , 'none');

}
jQuery(window).resize(function(){
	if(jQuery(window).width() > 768)
	{
					jQuery('nav.menu ul ul').css('display' , 'none');
				
	}
});


jQuery('header nav.menu > ul > li > a').each(function(){
	var a = jQuery(this);
	if(a.parent().find('> ul').length > 0)
	{
			a.addClass('has-sub');
	}
});
/* -------------------------------------------------------------- 
		     	Toggle Menu
		      -------------------------------------------------------------- */
		      jQuery(' nav.menu li.toggle a').on('click' , function()
		      	{			
		      				jQuery('nav.menu ul ul').css('display' , 'block');
		      				var t = jQuery(this);
		      				var items = jQuery(this).parent().parent().find('li:not(.toggle)');
		      				var prnt = jQuery(this).parent().parent();
		      				if(!prnt.hasClass('active-menu'))
		      				{				


		      								t.parent().addClass('active');
		      								items.slideDown(100);
		      								prnt.addClass('active-menu');
		      				}
		      				else{
		      								t.parent().removeClass('active');
		      								items.slideUp(100);
		      								jQuery('nav.menu ul ul').css('display' , 'none');
		      								prnt.removeClass('active-menu');
		      				}

		      				return false;
		      	});


		      jQuery(window).resize(function()
		      {
		      			if(jQuery(window).width() > 768)
		      			{
		      					jQuery('nav.menu li:not(.toggle)').css('display' , 'block');
		      					jQuery('nav.menu ul li.toggle').css('display' , 'none').removeClass('active');
		      			}
		      			else{
		      					jQuery('nav.menu li:not(.toggle)').css('display' , 'none');
		      					jQuery('nav.menu ul li.toggle').css('display' , 'block');
		      			}
		      });

 /* -------------------------------------------------------------- 
 	Carousel
  -------------------------------------------------------------- */
jQuery('.related-works-wrapper').each(function(){
			
			
			jQuery(".related-works-wrapper").carouFredSel({
			prev	: {	
				button	: '.prev',
				key		: 'left'
			},
			next	: { 
				button	: '.next',
				key		: 'right'
			},

			pagination	: {
					container: '.slider-pagination',
					anchorBuilder: false,
					duration: Speed * 2, 
					easing: Animation
			},
	        items               : {
	        	visible: 3 
	        } ,
	        direction           : "right",
	        scroll : {
            	items           :   1,
	            easing          : Animation,
	            duration        : Speed * 2,                        
	            pauseOnHover    : true ,
	            fx: 'scroll'
       		 }                  
		    }); 



});
/* -------------------------------------------------------------- 
	Flickr
-------------------------------------------------------------- */
jQuery('.widget-content .flickr').html('').jflickrfeed({
limit: 12,
qstrings: {
  id: '52617155@N08'
},
itemTemplate: 
'<a href="#"><img src="{{image_b}}" alt="{{title}}" /></a>'
	});


/* -------------------------------------------------------------- 
 	Carousel Home
  -------------------------------------------------------------- */
jQuery('.portfolio-slider.content-wrapper').each(function(){
			
			jQuery(".portfolio-slider.content-wrapper").carouFredSel({
			prev	: {	
				button	: '.prev',
				key		: 'left'
			},
			next	: { 
				button	: '.next',
				key		: 'right'
			},

			pagination	: {
					container: '.home-slider-pagination',
					anchorBuilder: false,
					duration: Speed * 2, 
					easing: Animation
			},
	        items               : {
	        	visible: 2 
	        } ,
	        direction           : "right",
	        scroll : {
            	items           :   1,
	            easing          : Animation,
	            duration        : Speed * 2,                        
	            pauseOnHover    : true
       		 }                  
		    }); 



});



/* -------------------------------------------------------------- 
Accordion
-------------------------------------------------------------- */
/* Quick Accoridon */
jQuery('.accordion').each(function() {

var acc = jQuery(this);
acc.addClass('opened').find('.item:first .head').addClass('head-active');
// show first item content
if(acc.hasClass('opened')) {
 jQuery(this).find('.item:first').find('.item-content').slideDown();
}

// when click
jQuery(this).find('.head').click(function() {
    if(!jQuery(this).hasClass('head-active')){
  jQuery(acc).find('.head').removeClass('head-active').parent().find('.item-content').slideUp(Speed , Animation);
  jQuery(this).parent().find('.item-content').slideDown(Speed , Animation);
  jQuery(this).addClass('head-active');
    }
    return false; 
});
}); // End Accrodion





 


});