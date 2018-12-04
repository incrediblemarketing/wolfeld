/* -------------------------------------------------- */
/* CACHE SELECTORS
/* -------------------------------------------------- */

var animHero = $("section#hero"),
	animWelcome = $("section#welcome"),
	animHowARTASWorks = $("section#how-artas-works"),
	animAreYouACandidate = $("section#are-you-a-candidate"),
	animTheARTASExperience = $("section#the-artas-experience"),
	animWhatSetsARTASApart = $("section#what-sets-artas-apart"),

	buttonLearnMore = $(".button-learn-more");


/*
var $splitText = new SplitText([animHero.find("h1"),
								animHero.find("h2"),
								animWelcome.find("h1"),
								animHowARTASWorks.find("h1"),
								animAreYouACandidate.find("h1"),
								animWhatSetsARTASApart.find("h1"),
								], {type: "words, chars, lines"});
*/


/* -------------------------------------------------- */
/* HERO
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* ANIMATION
	/* -------------------------------------------------- */

	var $heroH1SplitText = new SplitText(animHero.find("#hero-copy h1"), {type: "words, chars, lines"}), 
		heroH1SplitText = $heroH1SplitText.chars,

		$heroH2SplitText = new SplitText(animHero.find("#hero-copy h2"), {type: "words, chars, lines"}), 
		heroH2SplitText = $heroH2SplitText.words,

		$heroParagraphSplitText = new SplitText(animHero.find("#hero-copy p"), {type: "words, chars, lines"}), 
		heroParagraphSplitText = $heroParagraphSplitText.words;


	TweenMax.set([animHero.find("h1"), animHero.find("h2"), animHero.find("#hero-copy p")], {transformOrigin: "center left", perspective: 400});
	TweenMax.set(animHero.find("#hero-background"), {autoAlpha: 0, x: 0, scale: 0.85, transformOrigin: "bottom left"});
	//animHero.find(".scroll-hint").parent().addClass("no-pointer");

	var tlHero = new TimelineMax({paused: true});
		tlHero.staggerFrom(heroH1SplitText, 0.75, {autoAlpha: 0, y: 25, ease: Back.easeOut }, 0.02, "group-01")
			  .staggerFrom(heroH2SplitText, 1, {autoAlpha: 0, x: -10, ease: Expo.easeOut }, 0.02, "group-01")
			  .staggerFrom(heroParagraphSplitText, 1, {autoAlpha: 0, x: -10, ease: Expo.easeOut }, 0.02, "group-01")
			  .to(animHero.find("#hero-background"), 3, {autoAlpha: 0.5, x: -5, y: -5, scale: 0.9, ease: Expo.easeInOut}, "group-01")
			  .from(animHero.find("#hero-copy .button-group a"), 0.75, {autoAlpha: 0, x: -10, ease: Expo.easeOut}, "group-01")
			  .staggerFrom(animHero.find(".social-icons-hero").children(), 1, {autoAlpha: 0, ease: Expo.easeOut}, 0.12, "group-01")
			  .add( function() { animHero.find(".scroll-hint").parent().removeClass("no-pointer") } )
			  .add(
			  function() {

				$heroH1SplitText.revert();
				$heroH2SplitText.revert();
				$heroParagraphSplitText.revert();

			  });
			  //.staggerFrom(heroH2SplitText, 0.75, {opacity: 0, y: 80, scale: 0, rotationX: 180, transformOrigin:"0% 50% -50",  ease: Back.easeOut}, 0.01, "-=0.75");


	/* -------------------------------------------------- */
	/* INTERACTIONS
	/* -------------------------------------------------- */

	var tlHeroLearnMore = new TimelineMax({paused: true});
		tlHeroLearnMore.to(animHero.find("#hero-image"), 0.75, {autoAlpha: 0, scale: 0.95, ease: Back.easeOut}, "-=group-01")
					   .to(animHero.find("#hero-background"), 1, {autoAlpha: 1, x: 10, scale: 0.95, ease: Expo.easeInOut}, "-=group-01");


	buttonLearnMore.on("mouseover", function() {

		tlHeroLearnMore.play();

	}).on("mouseout mouseleave", function() {

		tlHeroLearnMore.reverse();
		
	});


	//if ( !$hasTouch ) {

	//$$(window).on("resize", _.debounce(function() { tlHero.restart(); }, $delayInterval));

	//}





/* -------------------------------------------------- */
/* WELCOME
/* -------------------------------------------------- */

var $welcomeH1SplitText = new SplitText(animWelcome.find("h1"), {type: "words, chars, lines"}), 
	welcomeH1SplitText = $welcomeH1SplitText.chars,

	$welcomeParagraphSplitText = new SplitText(animWelcome.find("p"), {type: "words, chars, lines"}), 
	welcomeParagraphSplitText = $welcomeParagraphSplitText.words;


//TweenMax.set([animHero.find("h1"), animHero.find("#h1"), animHero.find("#hero-copy p")], {transformOrigin: "center left", perspective: 400});
//TweenMax.set(animHero.find("#hero-background"), {autoAlpha: 0, x: animHero.width() / 4, scale: 0.9, transformOrigin: "bottom left"});


var tlWelcome = new TimelineMax({paused: true});
	tlWelcome.staggerFrom(welcomeH1SplitText, 0.75, {autoAlpha: 0, x: -10, ease: Back.easeOut}, 0.02)
		  	 .staggerFrom(welcomeParagraphSplitText, 1, {autoAlpha: 0, x: -10, ease: Expo.easeOut}, 0.02, "-=1")
			 .add(
			  function() {

				$welcomeH1SplitText.revert();
				//$welcomeParagraphSplitText.revert();

			  });
			  
		  	 //.from(heroH2SplitText, 0.75, {opacity: 0, y: 80, scale: 0, rotationX: 180, transformOrigin:"0% 50% -50",  ease: Back.easeOut}, 0.01, "-=0.75");





/* -------------------------------------------------- */
/* HOW ARTAS WORKS
/* -------------------------------------------------- */

var $howARTASWorksH1SplitText = new SplitText(animHowARTASWorks.find("h1"), {type: "words, chars, lines"}), 
	howARTASWorksH1SplitText = $howARTASWorksH1SplitText.chars,

	$howARTASWorksParagraphSplitText = new SplitText(animHowARTASWorks.find("p"), {type: "words, chars, lines"}), 
	howARTASWorksParagraphSplitText = $howARTASWorksParagraphSplitText.words;

var tlHowARTASWorks = new TimelineMax({paused: true});
	tlHowARTASWorks.staggerFrom(howARTASWorksH1SplitText, 0.75, {autoAlpha: 0, x: -10, ease: Back.easeOut}, 0.02, "group-01")
		  	 	   .staggerFrom(howARTASWorksParagraphSplitText, 1, {autoAlpha: 0, x: -10, ease: Expo.easeOut}, 0.02, "group-01")
		  	 	   .staggerFrom(animHowARTASWorks.find(".list-details").find(".media-object-section").next().children(), 0.5, {autoAlpha: 0, x: 10, ease: Expo.easeInOut}, 0.12, "group-01")
					.add(
					  function() {

						$howARTASWorksH1SplitText.revert();
						$howARTASWorksParagraphSplitText.revert();

					  });





/* -------------------------------------------------- */
/* ARE YOU A CANDIDATE
/* -------------------------------------------------- */

var $areYouACandidateH1SplitText = new SplitText(animAreYouACandidate.find("h1"), {type: "words, chars, lines"}), 
	areYouACandidateH1SplitText = $areYouACandidateH1SplitText.chars;

	$areYouACandidateParagraphSplitText = new SplitText(animAreYouACandidate.find("p"), {type: "words, chars, lines"}), 
	areYouACandidateParagraphSplitText = $areYouACandidateParagraphSplitText.lines;

var tlAreYouACandidate = new TimelineMax({paused: true});
	tlAreYouACandidate.staggerFrom(areYouACandidateH1SplitText, 0.75, {autoAlpha: 0, x: -10, ease: Back.easeOut}, 0.02)
					 .staggerFrom(areYouACandidateParagraphSplitText, 0.75, {autoAlpha: 0, x: -10, ease: Back.easeOut}, 0.02)
					.add(
					  function() {

						$areYouACandidateH1SplitText.revert();
						$areYouACandidateParagraphSplitText.revert();

					  });

		  	 	   //.staggerFrom(areYouACandidateParagraphSplitText, 1, {autoAlpha: 0, x: -10, ease: Expo.easeOut}, 0.02, "group-01");





/* -------------------------------------------------- */
/* THE ARTAS EXPERIENCE
/* -------------------------------------------------- */

var $theARTASExperienceH1SplitText = new SplitText(animTheARTASExperience.find("h1"), {type: "words, chars, lines"}), 
	theARTASExperienceH1SplitText = $theARTASExperienceH1SplitText.words;

	$theARTASExperienceParagraphSplitText = new SplitText(animTheARTASExperience.find("p"), {type: "words, chars, lines"}), 
	theARTASExperienceParagraphSplitText = $theARTASExperienceParagraphSplitText.lines;

var tlTheARTASExperience = new TimelineMax({paused: true});
	tlTheARTASExperience.staggerFrom(theARTASExperienceH1SplitText, 0.75, {autoAlpha: 0, x: -10, ease: Back.easeOut}, 0.02)
		  	 	   		.staggerFrom(theARTASExperienceParagraphSplitText, 1, {autoAlpha: 0, x: -10, ease: Expo.easeOut}, 0.02)

					//.from(animTheARTASExperience.find("p"), 1, {autoAlpha: 0, x: -10, ease: Expo.easeOut}, "-=1")
					 .from(animTheARTASExperience.find(".button"), 1, {autoAlpha: 0, ease: Expo.easeOut})

					.add(
					  function() {

						$theARTASExperienceH1SplitText.revert();
						$theARTASExperienceParagraphSplitText.revert();

					  });





/* -------------------------------------------------- */
/* WHAT SETS ARTAS APART
/* -------------------------------------------------- */

var $whatSetsARTASApartH1SplitText = new SplitText(animWhatSetsARTASApart.find("h1"), {type: "words, chars, lines"}), 
	whatSetsARTASApartH1SplitText = $whatSetsARTASApartH1SplitText.words,

	$whatSetsARTASApartParagraphSplitText = new SplitText(animWhatSetsARTASApart.find("p"), {type: "words, chars, lines"}), 
	whatSetsARTASApartParagraphSplitText = $whatSetsARTASApartParagraphSplitText.words;

var tlWhatSetsARTASApart = new TimelineMax({paused: false});
	tlWhatSetsARTASApart.staggerFrom(whatSetsARTASApartH1SplitText, 0.75, {autoAlpha: 0, x: -10, ease: Back.easeOut}, 0.02, "group-01")
		  	 	   .staggerFrom(whatSetsARTASApartParagraphSplitText, 1, {autoAlpha: 0, x: -10, ease: Expo.easeOut}, 0.02, "group-01")
		  	 	   .staggerFrom(animWhatSetsARTASApart.find(".list-details").children(), 1, {autoAlpha: 0, x: -10, ease: Expo.easeOut}, 0.12, "group-01")
					.add(
					  function() {

						$whatSetsARTASApartH1SplitText.revert();
						$whatSetsARTASApartParagraphSplitText.revert();

					  });
		  	 	   //.staggerFrom(animWhatSetsARTASApart.find(".list-details").find(".media-object-section").next().children(), 0.5, {autoAlpha: 0, x: 10, ease: Expo.easeInOut}, 0.12, "group-01");





/* -------------------------------------------------- */
/* ANIMATION OBSERVER
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	var animScenePlayAll = function() {
		"use strict";

		//tlFloat.play();
		tlHero.play();
		tlWelcome.play();
		tlHowARTASWorks.play();
		tlAreYouACandidate.play();
		tlTheARTASExperience.play();
		tlWhatSetsARTASApart.play();

	};


	var animScenePauseAll = function() {
		"use strict";

		//tlFloat.pause();
		tlHero.pause();
		tlWelcome.pause();
		tlHowARTASWorks.pause();
		tlAreYouACandidate.pause();
		tlTheARTASExperience.pause();
		tlWhatSetsARTASApart.pause();

	};


	/* -------------------------------------------------- */
	/* CONTROLLER
	/* -------------------------------------------------- */

	var animSceneController = function() {
		"use strict";
		//console.log("Playing animations in view.");

		if ( animHero.find(".anim").hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlHero.resume();

		} else {

			//tlHero.pause(0);

		}





		if ( animWelcome.find(".anim").hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlWelcome.resume();

		} else {

			//tlWelcome.pause(0);

		}





		if ( animHowARTASWorks.find(".anim").hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlHowARTASWorks.resume();

		} else {

			//tlHowARTASWorks.pause(0);

		}





		if ( animAreYouACandidate.find(".anim").hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlAreYouACandidate.resume();

		} else {

			//tlHowARTASWorks.pause(0);

		}






		if ( animTheARTASExperience.find(".anim").hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlTheARTASExperience.resume();

		} else {

			//tlTheArtasExperience.pause(0);

		}





		if ( animWhatSetsARTASApart.find(".anim").hasClass("anim-play") ) {

			//console.log("Element is active.");
			tlWhatSetsARTASApart.resume();

		} else {

			//tlWhatSetsARTASApart.pause(0);

		}





		if ( navPanel.hasClass("is-open") ) {

			animPauseAll();
			
		}


	};


/* -------------------------------------------------- */
/* ACTIONS
/* -------------------------------------------------- */

//$$(window).on("scrollstart", { latency: $updateInterval, leading: false, trailing: false }, animScenePauseAll);
$$(window).on("scrollstop", { latency: $updateInterval, leading: false, trailing: false }, animSceneController);

animScenePauseAll();
