/* -------------------------------------------------- */
/* FOR REFERENCE
/* -------------------------------------------------- */

/*
var hostRootDomain = "domain.com";
var hostDomainEN = "en.domain.com";
var hostDomainES = "es.domain.com";

var currentHost = location.host;
var currentURLLocation = location.href;
var currentURLPath = location.pathname;
var currentURLHash = location.hash;
*/


/* -------------------------------------------------- */
/* FRAMEWORK
/* -------------------------------------------------- */

var frameworkInit = function() {

	//var elem = new Foundation.Sticky($$("#sidebar nav"));

	// Reinitialize 'Equalizer' plugin.
	//TweenMax.delayedCall(2, Foundation.reInit, ["equalizer"]);


	//$('#element').foundation('reflow');
	//$('#element').foundation('_destroy');


	/*
	$('.title-bar').on('sticky.zf.stuckto:top', function(){
	  $(this).addClass('shrink');
	}).on('sticky.zf.unstuckfrom:top', function(){
	  $(this).removeClass('shrink');
	})
	*/

	// Init Foundation Framework.
	$$(document).foundation();


	/* -------------------------------------------------- */
	/* COMPONENTS
	/* -------------------------------------------------- */
	
	/*
	var options = {
		multiExpand: true,
		allowAllClosed: false
	};
	var accordion = new Foundation.Accordion($('#some-accordion'), options);
	*/


	var zfAccordion = new Foundation.Accordion($$(".accordion"), {
		allowAllClosed: true,
		deepLink: false,
		deepLinkSmudge: false,
		deepLinkSmudgeDelay: 300,
		multiExpand: true,
		slideSpeed: 400,
		updateHistory: false
	}),

	zfSmoothScroll = new Foundation.SmoothScroll($$(".scroll-to"), {
		animationDuration: 800,
		animationEasing: "easeInOutExpo",
		offset: 0,
		threshold: 50
	});


}; // END frameworkInit


/* -------------------------------------------------- */
/* CORE / COMPONENTS / MODULES
/* -------------------------------------------------- */

var core = function() {

	frameworkInit();

	comDialog();
	comParallax();
	//comQuicklinks();
	comSlider();
	//comStories();

	utilAssetObserver();
	utilDataAttributes();
	utilPrint();
	utilScrollProgress();

	uiInit();
	//uiNavbar();
	//uiNavPanel();
	uiLinkDelegation();
	uiButtons();
	uiScrollEvents();
	uiScrollTo();
	uiScrollTrack();
	uiSticky();
	//uiRelayout();
	
	//hashNav();
	//pages();

};


var components = function() {

	//comAccordion();
	//comAnimGradient();
	//comBlog();
	//comSlider();
	//comParticles();
	//comStories();
	//comTilt();

	utilEmergence();
	utilPageVisibility();

	animCore();
	
	hasTouch();

};


/* -------------------------------------------------- */
/* FUNCTIONS
/* -------------------------------------------------- */

// ENABLE / DISABLE CONTENT
var disableContent = function() {		
	"use strict";
	//console.log("Content disabled.");

	html.not(".no-scroll").css({"overflow-x" : "hidden", "overflow-y" : "hidden"});


	//bodyScrollLock.disableBodyScroll(document.querySelector(".modal"));

};

var enableContent = function() {		
	"use strict";
	//console.log("Content enabled.");
	
	html.not(".no-scroll").css({"overflow-x" : "hidden", "overflow-y" : "scroll"});


	//bodyScrollLock.clearAllBodyScrollLocks();
	//bodyScrollLock.enableBodyScroll(".modal", BodyScrollOptions = {reserveScrollBarGap: true});

};


/* -------------------------------------------------- */
/* PRELOADER
/* -------------------------------------------------- */


// ANIMATION
if ( $usePreloader ) {
	
	/* -------------------------------------------------- */
	/* DEFAULTS
	/* -------------------------------------------------- */
	
	TweenMax.set(body, {autoAlpha: 1});
	
	
	/* -------------------------------------------------- */
	/* PRELOADING START
	/* -------------------------------------------------- */
	
	var tlPreloaderStart = new TimelineMax({paused: true});
		tlPreloaderStart.add(disableContent)
						.to(preloader, 0.25, {display: "block", opacity: 1, ease: Power2.easeOut})
						.to([main, navPanel, navbar, toolbar], 0.5, {display: "block", opacity: 1, ease: Power2.easeOut});
	
	
	/* -------------------------------------------------- */
	/* PRELOADING COMPLETE
	/* -------------------------------------------------- */
	
	var tlPreloaderEnd = new TimelineMax({paused: true});
		tlPreloaderEnd.to([main, navPanel, navbar, toolbar], 0.25, {display: "block", opacity: 1, ease: Power2.easeOut})
					  .to(preloader, 0.25, {display: "none", opacity: 0, ease: Power2.easeOut})
					  .add(enableContent);
	

} else {
	
	enableContent();
	//preloader.remove();
	TweenMax.set([main, navPanel, navbar, toolbar], {display: "block", opacity: 1, delay: 0.5 });
	
}


/* -------------------------------------------------- */
/* PREPARE APIs / PLUGINS
/* -------------------------------------------------- */

$$(document).ready(function() {

	console.log("Loading DOM...");


	if ( $usePreloader ) {

		tlPreloaderStart.play(0).timeScale(1).delay(0);

	}
	
	
	// INIT CORE
	core();

});


$$(window).on("load", function() {

	console.log("Content ready: All assets and resources loaded.");


	if ( $usePreloader ) {

		tlPreloaderEnd.play(0).timeScale(1).delay(1);
		
		// INIT COMPONENTS
		TweenMax.delayedCall(tlPreloaderEnd.duration() + $delayInterval, components);

	} else {
		
		// INIT COMPONENTS
		TweenMax.delayedCall($delayInterval, components);

	}

});
