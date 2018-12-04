/* -------------------------------------------------- */
/* ACCORDION
/* -------------------------------------------------- */

//removeIf(production)
var comAccordion = function() {
	"use strict";
	
	$("li.accordion-item").find("a.accordion-title").on( "click", function(e) {
		e.preventDefault();
		
		//var self = $(this);
		
		TweenMax.delayedCall(0.25, accordionCheck);

	});

	
	var accordionCheck = function() {
		
		if ( $$("li.accordion-item").hasClass("is-active") ) {
			
			
			//TweenMax.to("li.accordion-item:not(.is-active)", 0.25, {autoAlpha: 0.75, ease: Power4.easeOut});
			//TweenMax.to("li.accordion-item.is-active", 0.25, {autoAlpha: 1, ease: Power4.easeOut});
			
						
			$("li.accordion-item:not(.is-active)").find("a.accordion-title").css({"background-color" : "#f4f4f4"});
			$("li.accordion-item.is-active").find("a.accordion-title").css({"background-color" : "#6400fa"});
			
		} else  {
			
			//TweenMax.to("li.accordion-item", 0.25, {autoAlpha: 1, ease: Power4.easeOut});
			
			$("li.accordion-item").find("a.accordion-title").css({"background-color" : "#fff"});
			
		}
		
	};

}; // END comAccordion
//endRemoveIf(production)


/* -------------------------------------------------- */
/* GRADIENTS
/* -------------------------------------------------- */

/*
var comAnimGradient() {

	var granimInstance = new Granim({
		element: "#background-gradient",
		name: "granim",
		direction: "radial", // diagonal, left-right, top-bottom, radial
		opacity: [1, 1],
		loop: true,
		stateTransitionSpeed: 500,
		isPausedWhenNotInView: true,
		scrollDebounceThreshold: 300,
		states : {

			"default-state": {
				gradients: [
					["#6400fa", "#fa6432"],
					["#32e14b", "#6400fa"]
				]
			},

			"gradient-charcoal": {
				gradients: [
					["#000", "#333"],
					["#333", "#000"]
				]
			}

		},
		onStart: function() {
			console.log('Granim: onStart');

		},
		onGradientChange: function(colorDetails) {
			console.log('Granim: onGradientChange, details: ');
			console.log(colorDetails);

		},
		onEnd: function() {
			console.log('Granim: onEnd');

		}

	});


	$$(window).backgroundDefault = function() {
		granimInstance.changeState("default-state");
	};
	
}
*/ // END comAnimGradient


/* -------------------------------------------------- */
/* BLOG
/* -------------------------------------------------- */ 

//removeIf(production)
var comBlog = function() {
	
	if ( $$(".page").data("page") === "about" || $$(".page").data("page") === "team"  || $$(".page").data("page") === "press" || $$(".page").data("page") === "careers" ) {

		/* -------------------------------------------------- */
		/* CACHE SELECTORS
		/* -------------------------------------------------- */
		
		var blogData = "https://api.rss2json.com/v1/api.json",
			$blogSection = $("#blog"),
			$blogContent = $("#blog-content"),
			blogDataFeed = {
				rss_url: "https://medium.com/feed/@axelunlimited"
			};
	
			//TweenMax.set($$("#blog-content").find(".cell"), {autoAlpha: 0});
			//TweenMax.staggerFrom($$("#blog-content").find(".cell"), 1, {autoAlpha: 0, ease: Power4.easeOut, onComplete: function() { TweenMax.delayedCall(0, Foundation.reInit, ["equalizer"]); } }, 0.12);
		
			$.getJSON(blogData, blogDataFeed, function(response) {
				
				
				if (response.status === "ok") {
					
					var output = "";
					
					$.each(response.items, function (key, item) {
						
						// Attach a status message during profile image tile generation.
				   		//$blogContent.before('<p class="status-data position-absolute margin-sm padding-xs round-sm p10 text-charcoal background-white bring-to-front"><span class="fa fa-spinner fa-pulse margin-lr-xs" aria-hidden="true"></span></p>');
						
						var visibleSm;
						
						if ( key < 3 ) { // Set how many blog posts to display.
							
							visibleSm = "";
							
						 } else {
							 
							visibleSm = " visible-sm";
							 
						 }
						
						output += '<div class="cell padding-none' + visibleSm + '"><header>';
						output += '<span class="date">' + $.format.date(item.pubDate, "dd<br>MMM") + "</span>";
						
						var tagIndex = item.description.indexOf('<img'), // Find where the img tag starts.
							srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex, // Find where the src attribute starts.
							srcStart = srcIndex + 5, // Find where the actual image URL starts; 5 for the length of 'src="'.
							srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart, // Find where the URL ends.
							src = item.description.substring(srcStart, srcEnd); // Extract just the URL.
						
						//output += '<figure><img src="' + src + '" width="100%" height="auto"></figure></header>';
						
						output += '<figure><div class="post-image" style="background-image: url(' + src + ')"></div></figure></header>';




						output += '<div class="post-content" data-equalizer-watch><h4><a href="'+ item.link + '" target="_blank" rel="noopener" class="external">' + item.title + '</a></h4>';
						output += '<div class="post-meta"><span class="post-author">By ' + item.author + '</span></div>';
						
						
						var yourString = item.description.toString().replace(/<img[^>]*>/, ""), // Replace with your string.
							maxLength = 120, // Maximum number of characters to extract trim the string to the maximum length.
							trimmedString = yourString.substr(0, maxLength),
							url = item.link;
						
						
						trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))); // Re-trim if we are in the middle of a word.
						
						//output += '<p>' + trimmedString + '...</p>';
						//output += '<p>' + item.content + '...</p>';

						
						//output += '<div class="divider margin-top-xs border-solid border-bottom border-thin border-light-grey"></div>';
						
						
						output += '<a class="center-element p10 text-dar text-dark-grey text-accent-hover text-uppercase border-thin border-solid border-top border-light-grey button button-width-full background-transparent background-transparent-hover external" href="' + url + '" target="_blank" rel="noopener"><i class="fa fa-external-link margin-right-xs"></i>Read more</a>';
						
						
						output += '</div></div></div>';
						
						
						return key < 3;
						
					});
					
					$blogContent.html(output);
					
				}
				
				
			})

			.done(function(blogDataFeed) {

				console.log("Fetching Blog data...");

			})

			.fail(function(blogDataFeed) {

				console.log("Error: Unable to load Blog data.");

			})

			.always(function(blogDataFeed) {

				console.log("Blog data loaded.");

			});
	
	}
	
}; // END comBlog
//endRemoveIf(production)


/* -------------------------------------------------- */
/* DIALOG
/* -------------------------------------------------- */

var comDialog = function() {

	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */

	var dialog = $("#dialog"),
		close = $("#dialog").find(".close"),
		blocker = $("#blocker"),
		buttonDialog = $("[data-content-selector]");


	/* -------------------------------------------------- */
	/* DETECT
	/* -------------------------------------------------- */

	if ( $isEdge || $isExplorer ) {

		dialog.css({"left" : "50%", "transform" : "translate(-50%,-50%)"});

	}


	/* -------------------------------------------------- */
	/* BLOCKER
	/* -------------------------------------------------- */

	var block = function() {

		if ( !html.hasClass("inactive") ) {

			TweenMax.to( blocker, 0.25, {display: "block", opacity: 0.25,

											onStart: function() {

												disableContent();
												html.addClass("inactive");
												//$$(body).addClass("is-off-canvas-open");
												blocker.addClass("no-pointer");

											},

											onComplete: function() {
												  
												blocker.removeClass("no-pointer");
												  
											}

			});

		} else {

			TweenMax.to( blocker, 0.25, {display: "none", opacity: 0,

											onStart: function() {

												enableContent();
												html.removeClass("inactive");
												//$$(body).removeClass("is-off-canvas-open");
												blocker.addClass("no-pointer");

											}
			});
			

		}

	};


	/* -------------------------------------------------- */
	/* DIALOG
	/* -------------------------------------------------- */

		//*Note: Same origin policy is in effect using this method. External or third-party links will not load into 'dialog-container'.
		// Method: <a href="about.html" class="popup" data-content-selector="#articles" data-content-width="800" data-content-height="auto"></a>


		/* -------------------------------------------------- */
		/* CONTENT
		/* -------------------------------------------------- */
	
		//TweenMax.set(dialog, {display: "none", opacity: 0});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		var dialogOpen = function(dialogContentURL, dialogContentSelector) {

			var dialogContentURL, // Variable for content's path / location.
				dialogContentSelector; // Variable for loaded content's element id, ex: '#my-content'.


				block();

				if ( !html.hasClass("inactive") ) {

					TweenMax.to( dialog, 0.25, {display: "block", opacity: 1, ease: Expo.easeOut,

													   onStart: function() {

																   html.addClass("no-pointer");

																   //dialog.find("#dialog-close").not(".close").css({"display" : "none"});


																   dialog.find("#dialog-container").load(dialogContentURL + dialogContentSelector, function ( response, status, xhr ) {


																		dialog.find("#dialog-error").addClass("hide").find("p").text("");


																		// PRELOADER
																		TweenMax.set( dialog.find("#dialog-preloader"), {display: "block", opacity: 1, scale: 1});


																		// CALLBACK
																		if ( status == "success" ) {


																		   // ACCESSIBILITY
																		   var dialogTitle = dialog.find("#dialog-title").text(),
																		   	   dialogDescription = dialog.find("#dialog-description").text();


																		   if ( dialog.find("#dialog-title").length ) {

																				dialog.attr("aria-labelledby", dialogTitle);

																			} else {

																				dialog.attr("aria-labelledby", "Dialog");

																			}


																		   if ( dialog.find("#dialog-description").length ) {

																				dialog.attr("aria-describedby", dialogDescription);

																			} else {

																				dialog.attr("aria-describedby", "");

																			}


																			if ( !dialog.find("#dialog-container").find(dialogContentSelector).length ) {

																				var message = "Error: Unable to load " + dialogContentURL + dialogContentSelector;

																				dialog.find("#dialog-error").removeClass("hide").find("p").text(message);

																			}


																		   //utilAssetObserver();
																		 
																		   //console.log( dialogContentURL + dialogContentSelector);

																		   TweenMax.to( dialog.find("#dialog-preloader"), 0.25, {display: "none", opacity: 0, scale: 0.75, delay: 0, ease: Expo.easeOut});

																		   //dialog.find("#dialog-close").not(".close").css({"display" : "block"});


																		} else {

																		   var message = "Error: Unable to load " + dialogContentURL + dialogContentSelector;

																		   //$(this).html( msg + xhr.status + " " + xhr.statusText );

																		   //$$(this).text( '<div class="center-vh text-charcoal text-center"> <span class="fa fa-exclamation-circle p4" aria-hidden="true"></span> <p>'+msg+'</p> </div>' );

																		   TweenMax.to( dialog.find("#dialog-preloader"), 0.25, {display: "none", opacity: 0, scale: 0.75, delay: 1, ease: Expo.easeOut,
																																onComplete: function() {
																																	dialog.find("#dialog-error").removeClass("hide")
																																		 .find("p").text(message);
																																	}
																		   														});


																		   // ACCESSIBILITY
																		   dialog.attr("aria-labelledby", "Error")
																		   		.attr("aria-describedby", "We're sorry. This content is currently unavailable.");

																		}


																   });

													   },

													   onComplete: function() {

														   //dialog.addClass("open");
														   html.removeClass("no-pointer");

													   }
					});

				} else {

					TweenMax.to( dialog, 0.25, {display: "none", opacity: 0, ease: Expo.easeOut,

														onComplete: function() {
														   
														   dialog.attr("aria-labelledby", "Inactive") // Accessibility
														   		.attr("aria-describedby", "This dialog window is currently inactive.")
														   		.find("#dialog-container").html(""); // Clear content.

													   }

					});

				}

		};


		/* -------------------------------------------------- */
		/* ACTIONS
		/* -------------------------------------------------- */

		blocker.on("click", function(e) {
			e.preventDefault();

			block();
			dialogOpen();

		});


		buttonDialog.on("click", function(e) {
			e.preventDefault();
			
			var self = $(this),
				$dataContentURL = null, // self.attr("href"), // self.data("content-url"), // Read 'data-content-url' of clicked element and store as a value for 'dialogOpen(dialogContentURL)'.
				$dataConentSelector = self.data("content-selector"), // Read 'data-content-selector' of clicked element and store as a value for 'dialogOpen(dialogContentSelector)'.
				$dataContentWidth, // Read 'data-content-width' of clicked element and store as a value for 'dialogOpen(dataContentWidth)'.
				$dataContentHeight; // Read 'data-content-height' of clicked element and store as a value for 'dialogOpen(dataContentHeight)'.


				/* -------------------------------------------------- */
				/* CONDITIONAL VARIABLES
				/* -------------------------------------------------- */

				// WIDTH
				if ( self.data("content-width") === "auto" && window.matchMedia("(max-width: 1500px)").matches ) {

					//console.log("Dialog set to auto size width.");
					dialog.addClass("dialog-width-auto");
					$dataContentWidth = window.innerWidth / 1.2;

				} else if ( self.data("content-width") === "auto" ) {

					//console.log("Dialog set to auto size width.");
					dialog.addClass("dialog-width-auto");
					$dataContentWidth = 1024;

				} else {

					//console.log("Dialog not set to auto size width.");
					dialog.removeClass("dialog-width-auto");
					//dialog.css({"width" : "100%", "max-width" : "1024px"});
					$dataContentWidth = self.data("content-width");

				}


				// HEIGHT
				if ( self.data("content-height") === "auto" && window.matchMedia("(max-height: 1500px)").matches ) {

					//console.log("Dialog set to auto size height.");
					dialog.addClass("dialog-height-auto");
					//$dataContentHeight = 768;
					$dataContentHeight = window.innerHeight / 1.2;

				} else {

					//console.log("Dialog not set to auto size height.");
					dialog.removeClass("dialog-height-auto");
					$dataContentHeight = self.data("content-height");

				}


				// Check if element has href or is a regular element, ex: 'div' or 'span'.
				if ( self.is( "a" ) ) {

					$dataContentURL = self.attr("href");

					//console.log("Element has href: " + $dataContentURL);

	 			} else {

	 				$dataContentURL = self.data("content-url");

	 				//console.log("Element does not have href: " + $dataContentURL);

	 			}


	 			if ( $isMobile ) {

	 				dialog.css({ "left" : "50%",
	 							 "transform" : "translate(-50%,-50%)" 
	 							 });

	 			}


				//console.log($dataContentURL + " #" + $dataConentSelector + " @ " + $dataContentWidth + " x " + $dataContentHeight);
				
				dialogOpen($dataContentURL, " #" + $dataConentSelector, $dataContentWidth, $dataContentHeight);
				
				TweenMax.set( dialog, { width: $dataContentWidth, height: $dataContentHeight } );

				//window.location.hash = "#" + $dataConentSelector;

		});


		/*
		var dialogPath = window.location.pathname,
			dialogHash = window.location.hash;

		dialogOpen(dataContentURL, dialogHash, dataContentWidth, dataContentHeight);
		*/


		close.on("click", function(e) {
			e.preventDefault();

			dialogOpen();

		});


		$$(window).on("resize", _.debounce(function() {

			if ( dialog.length && dialog.hasClass("dialog-width-auto") && window.matchMedia("(max-width: 1500px)").matches ) {
				   
				//console.log("Dialog width set to 'auto'.");
				TweenMax.to( dialog, 0.25, { width: window.innerWidth / 1.2, ease: Power4.easeOut } );

			}

			if ( dialog.length && dialog.hasClass("dialog-height-auto") && window.matchMedia("(max-height: 1500px)").matches ) {
				   
				//console.log("Dialog height set to 'auto'.");
				TweenMax.to( dialog, 0.25, { height: window.innerHeight / 1.2, ease: Power4.easeOut } );
				//dialog.css({"height" : "auto"});

			}

		}, 100));

}; // END comDialog


/* -------------------------------------------------- */
/* PARALLAX
/* -------------------------------------------------- */

var comParallax = function() {

	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */

	var parallax = $(".dzsparallaxer");


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	dzsprx_init( parallax, {
		direction: "reverse", // normal, reverse
		settings_mode: "scroll", // scroll, mouse, mouse_body
		mode_scroll: "normal", // normal, fromtop
		animation_duration: "2",
		easing: "easeInOutSine" // easeIn, easeOutQuad, easeInOutSine
	});

};


/*
var comParallax = function() {
	
	var rellax = new Rellax(".rellax", {
		center: true,
		round: true,
		vertical: true,
		horizontal: false
  	});
	
	
}
*/ // END comParallax


/* -------------------------------------------------- */
/* PARTICLES
/* -------------------------------------------------- */

/*
var comParticles = function() {
	
	if ( $hasTouch && $isSmallScreen ) {

		disableParticles();

	} else {

		enableParticles();

	}
	
	
}
*/ // END comParticles


/* -------------------------------------------------- */
/* QUICKLINKS
/* -------------------------------------------------- */

//removeIf(production)
var comQuicklinks = function() {
	"use strict";
	//console.log("Initializing uiCommon...");
	
	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */

	var quicklinks = $("#quicklinks"),
		close = $("#quicklinks").find(".close");


	/* -------------------------------------------------- */
	/* ACTIONS
	/* -------------------------------------------------- */

	close.find("span").addClass("fa-eye-slash");


	close.on("click", function(e) {
		e.preventDefault();

		var self = $(this);


		if ( self.find("span").hasClass("fa-eye-slash") ) {

			TweenMax.staggerTo(quicklinks.children().not(":last"), 0.25, {x: 0, rotationY: -180, perspective: 10, transformOrigin: "right center", transformStyle:"preserve-3d", ease: Power4.easeIn,
																		
																		onStart: function() {

																			
																			close.addClass("no-pointer");
																			close.parent().addClass("background-secondary").removeClass("background-white");

																		},

																		onComplete: function() {

																			close.removeClass("no-pointer");
																			close.find("span").removeClass("fa-eye-slash").addClass("fa-eye");

																			quicklinks.css({"box-shadow" : "none"});

																		}


																		}, 0.12);

		} else {

			TweenMax.staggerTo(quicklinks.children().not(":last"), 0.25, {x: 0, rotationY: 0, ease: Power4.easeOut,

																		onStart: function() {

																			
																			close.addClass("no-pointer");

																		},

																		onComplete: function() {

																			close.removeClass("no-pointer");
																			close.parent().addClass("background-white").removeClass("background-secondary");
																			close.find("span").removeClass("fa-eye").addClass("fa-eye-slash");

																			quicklinks.css({"box-shadow" : ""});

																		}


																		}, -0.12);

		}

	});

}; // END uiQuicklinks
//endRemoveIf(production)


/* -------------------------------------------------- */
/* SLIDER
/* -------------------------------------------------- */

var comSlider = function() {
	"use strict";

	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */

	var sliderDefault = $(".slider-default"),
		sliderDefaultAdapt = $(".slider-default.adapt").flickity();


    /* -------------------------------------------------- */
    /* SLIDER
    /* -------------------------------------------------- */

    //var sliderDefault = $(".slider-default");
    
    /*
    TweenMax.fromTo(sliderDefault, 0.5, {autoAlpha: 0},
    							   		{autoAlpha: 1, delay: 1});
    */

    // Disable vertical touch scrolling when interacting with any slider.
	/*
    sliderDefault.on("touchmove", function(e) {
            e.preventDefault();
        
            return false;
        
        
    }).on("touchend touchleave", function(e) {
        

        
    });
	*/
    
    
    

    
    // Resize slider when content has loaded.
    var sliderResize = function() { 

	   sliderDefault.flickity("resize");
        
    };
	
	TweenMax.delayedCall($delayInterval, sliderResize);
    
    
	
	
    
	// SET-UP
    //var sliderDefaultAdapt = $(".slider-default.adapt").flickity({});
    
    sliderDefault.has(".adapt").each(function() {
		
		var self = $(this);
		
        // Move '.flickity-page-dots' above slider.
		self.find("ol.flickity-page-dots").prependTo( $(this).find(".flickity-viewport") );
        
		// Bug fix: Flickity does not set correct 'height' for content other than images.
		self.find(".flickity-viewport").css("height", ''+$(this).find(".flickity-viewport .slider-item.is-selected").children().height()+'' + "px" );
        
    });
    
	// Disable 'href' links when clicking.
	$(".slider-item a").on("click touchdown", function(e) {
        
		//e.preventDefault();
		//return false;
        
	});

	
	// SLIDER ADAPT
	sliderDefaultAdapt.on("select.flickity", function() {

		//var sliderItemIndex = $(this).data("flickity");
		//console.log(sliderItemIndex.selectedIndex);

		var self = $(this);
		
        self.each(function() {
			
			// Bug fix: Flickity does not set correct 'height' for content other than images.
			self.find(".flickity-viewport").css("height", ''+$(this).find(".flickity-viewport .slider-item.is-selected .cell").height()+'' + "px" );
		            
        });
		
		

	});

	
	/* -------------------------------------------------- */
	/* TESTIMONIALS
	/* -------------------------------------------------- */ 

	// SLIDER
	/*
	TweenMax.set("#slider-testimonials .slider-item:not(.is-selected)", {scale: 0.75, transformOrigin: "bottom center"});

	//var sliderTestimonials = $("#slider-testimonials").flickity({});

	$$("#slider-testimonials").on("select.flickity", function() {

		TweenMax.to("#slider-testimonials .slider-item.is-selected", 0.75, {scale: 1, ease: Back.easeInOut});
		TweenMax.to("#slider-testimonials .slider-item:not(.is-selected)", 0.5, {scale: 0.75, ease: Back.easeOut});

	}).on("settle.flickity", function() {

		//TweenMax.to(".slider-item:not(.is-selected)", 0.5, {scale: 0.75, ease: Back.easeOut});

	});
	*/


	/* -------------------------------------------------- */
	/* CONTROLLER
	/* -------------------------------------------------- */

	var animSliderController = function() {

		sliderDefault.each(function() {

			// Cache selectors.
			var self = $(this);

			if ( self.hasClass("anim-play") ) {

				self.flickity("playPlayer");
				//self.flickity("unpausePlayer");

			} else {

				self.flickity("stopPlayer");

			}

		});

	};

	$$(window).on("scrollstop", animSliderController);

}; // END comSlider


/* -------------------------------------------------- */
/* CASE STUDIES
/* -------------------------------------------------- */

//removeIf(production)
var comStories = function() {

	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */

    var caseStudyUser = $("#stories .profiles .cell"),
    	caseStudies = $("#stories .profiles"),
        caseStudyJosh = $("#josh"),
        caseStudyShera = $("#shera"),
        caseStudyTina = $("#tina");


	/* -------------------------------------------------- */
	/* TRIM TEXT
	/* -------------------------------------------------- */
	
	/*
	var textTrim = $(".text-trim"),
		maxCharCount = 100;    

	$textTrim.each( function() {  
		
		var $self = $(this).text();
		
		if( $self.length < maxCharCount ) return;

		
		
		$(this).html( $self.slice( 0, maxCharCount ) + '<span>... </span><a href="#" class="more">More</a>' +
					  '<span style="display:none;">' + $self.slice( maxCharCount, $self.length ) + ' <a href="#" class="less">Less</a></span>'
		);
		
		
		
	}); 


	$('a.more', $textTrim).click(function(event){
		event.preventDefault();
		$(this).hide().prev().hide();
		$(this).next().show();        
	});


	$('a.less', $textTrim).click(function(event){
		event.preventDefault();
		$(this).parent().hide().prev().show().prev().show();    
	});
	*/


	/* -------------------------------------------------- */
	/* PROFILES
	/* -------------------------------------------------- */

		/* -------------------------------------------------- */
		/* TILES
		/* -------------------------------------------------- */

		TweenMax.set(caseStudyUser.find("[data-src]"), {autoAlpha: 0, scale: 1.12});

		// JOSH
		caseStudyUser.on("mouseover touchstart", function() {
			
			var self = $(this),
				tlCaseStudy = new TimelineMax({paused: false});
				tlCaseStudy.add( function() { self.addClass("overflow-hidden"); }, "group-1" )
						   .to(self.find(".story-icon"), 0.75, {autoAlpha: 0, scale: 0.75, ease: Back.easeOut}, "group-1")
						   .to(self.find(".text-container"), 1, {autoAlpha: 0, ease: Power4.easeOut}, "group-1")
						   .to(self.find(".button"), 1, {autoAlpha: 0, ease: Power4.easeOut}, "group-1")
						   .to(self.find("[data-src]"), 0.5, {autoAlpha: 1, scale: 1, ease: Power4.easeOut}, "group-1");
			
			
		}).on("mouseout touchend touchleave", function() {
			
			var self = $(this),
				tlCaseStudy = new TimelineMax({paused: false});
				tlCaseStudy.to(self.find(".text-container"), 0.75, {autoAlpha: 1, ease: Power4.easeOut}, "group-1")
						   .to(self.find(".button"), 0.75, {autoAlpha: 1, ease: Power4.easeOut}, "group-1")
						   .to(self.find("[data-src]"), 0.25, {autoAlpha: 0, scale: 1.12, ease: Power4.easeOut}, "group-1")
						   .to(self.find(".story-icon"), 0.5, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, "group-1")
						   .add( function() { self.removeClass("overflow-hidden"); }, "group-1" );
			
		});

}; // END comCaseStudies
//endRemoveIf(production)


/* -------------------------------------------------- */
/* TILT
/* -------------------------------------------------- */

//removeIf(production)
/*
var comTilt = function() {

	var tilt = $(".tilt");

	tilt.tilt({
		maxTilt: 8,
		speed: 1000,
		transition: false,
		easing: "cubic-bezier(0.86, 0, 0.07, 1)",
		perspective: 1000,
		disableAxis: "x",
		glare: false,
		maxGlare: 1,
		scale: 1,
		reset: true
	});

	
	tilt.on("click mouseup mouseleave touchend", function() {
		
		var self = $(this)
		
		self.tilt.destroy.call(self);
		
	}).on("click mouseup mouseleave touchend", function() {
		
		var self = $(this)
		
		self.tilt();
		
	});
    

    if ( $hasTouch ) {
        tilt.methods.destroy.call(tilt);
	}
	

} */ // END comTilt
//endRemoveIf(production)
