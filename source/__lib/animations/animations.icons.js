/* -------------------------------------------------- */
/* CACHE SELECTORS
/* -------------------------------------------------- */

var	animIcon = $("svg.anim"),
	animIconPredictableResults = $("#icon-predictable-results"),
	animIconNoMoreGuesswork = $("#icon-no-more-guesswork"),
	animIconConsistency = $("#icon-consistency"),
	animIconHealthyHair = $("#icon-healthy-hair");


/* -------------------------------------------------- */
/* PREDICTABLE RESULTS
/* -------------------------------------------------- */

var tlIconPredictableResults = new TimelineMax({paused: true});
	tlIconPredictableResults.staggerFromTo(animIconPredictableResults.find("#hair-style-01").children(), 0.2,
																{autoAlpha: 0, scale: 0},
																{autoAlpha: 1, scale: 1, ease: Expo.easeInOut}, 0.12)

							.staggerTo(animIconPredictableResults.find("#hair-style-01").children(), 0.2, {autoAlpha: 0, scale: 0, delay: 0.5, ease: Expo.easeInOut}, -0.12)

							.staggerFromTo(animIconPredictableResults.find("#hair-style-02").children(), 0.2,
																{autoAlpha: 0, scale: 0},
																{autoAlpha: 1, scale: 1, ease: Expo.easeInOut}, 0.12)

							.staggerTo(animIconPredictableResults.find("#hair-style-02").children(), 0.2, {autoAlpha: 0, scale: 0, delay: 0.5, ease: Expo.easeInOut}, -0.12)

							.staggerFromTo(animIconPredictableResults.find("#hair-style-03").children(), 0.2,
																{autoAlpha: 0, scale: 0},
																{autoAlpha: 1, scale: 1, ease: Expo.easeInOut}, 0.12)

							.staggerTo(animIconPredictableResults.find("#hair-style-03").children(), 0.2, {autoAlpha: 0, scale: 0, delay: 0.5, ease: Expo.easeInOut}, -0.12)

							.fromTo(animIconPredictableResults.find("#clipboard-body"), 0.5,
															{autoAlpha: 0, scale: 0, transformOrigin: "center center"},
															{autoAlpha: 1, scale: 1, ease: Expo.easeInOut}, "group-01")

					 		.fromTo(animIconPredictableResults.find("#clipboard-checkmark"), 0.75,
					 				{autoAlpha: 0, scale: 0, rotation: 180, transformOrigin: "center center"},
									{autoAlpha: 1, scale: 1, rotation: 0, ease: Back.easeOut}, "group-01")

					 		.add(animComplete);





/* -------------------------------------------------- */
/* NO MORE GUESSWORK
/* -------------------------------------------------- */

var tlIconNoMoreGuessWork = new TimelineMax({paused: true});
	tlIconNoMoreGuessWork
						 //.to(animIconNoMoreGuesswork.find("#question-block"), 0.5, {y: -10, ease: Bounce.easeOut})
						 //.to(animIconNoMoreGuesswork.find("#question-block"), 0.25, {y: 0, ease: Back.easeOut})
						 //.to(animIconNoMoreGuesswork.find("#question-block"), 0.5, {y: -10, ease: Bounce.easeOut})
						 //.to(animIconNoMoreGuesswork.find("#question-block"), 0.25, {y: 0, ease: Back.easeOut})
						 //.to(animIconNoMoreGuesswork.find("#question-block"), 0.25, {autoAlpha: 0, scale: 0.75, y: 10, transformOrigin: "center center", ease: Expo.easeInOut})
						.staggerFromTo(animIconNoMoreGuesswork.find("#network-lines").children(), 0.5,
									{autoAlpha: 0, scale: 0, transformOrigin: "center center"},
									{autoAlpha: 1, scale: 1, ease: Expo.easeInOut}, 0.12, "group-01")

					 	 .staggerFromTo(animIconNoMoreGuesswork.find("#network-nodes").children(), 0.75,
					 				{autoAlpha: 0, scale: 0, transformOrigin: "center center"},
									{autoAlpha: 1, scale: 1, ease: Back.easeOut}, 0.12, "group-01")
									
					 	  .add(animComplete);





/* -------------------------------------------------- */
/* CONSISTENCY
/* -------------------------------------------------- */

var tlIconConsistency = new TimelineMax({paused: true});
	tlIconConsistency.staggerFromTo(animIconConsistency.children(), 1,
							{autoAlpha: 0, scale: 0, transformOrigin: "center center"},
							{autoAlpha: 1, scale: 1, ease: Elastic.easeOut}, 0.12, "group-01")

					.fromTo(animIconConsistency.find("#gear-large"), 5,
							{rotation: 360, transformOrigin: "center center"},
							{rotation: "0_cw", ease: Back.easeInOut}, "group-01")

					 .fromTo(animIconConsistency.find("#gear-small"), 5,
					 		{rotation: -360, transformOrigin: "center center"},
							{rotation: "0_ccw", ease: Back.easeInOut}, "group-01")

					 .add(animComplete);





/* -------------------------------------------------- */
/* HEALTHY HAIR
/* -------------------------------------------------- */

var tlIconHealthyHair = new TimelineMax({paused: true});
	tlIconHealthyHair.fromTo(animIconHealthyHair.find("#epidermis"), 0.75,
							{autoAlpha: 0, scaleY: 0, transformOrigin: "center bottom"},
							{autoAlpha: 1, scaleY: 1, ease: Expo.easeInOut})

					 .fromTo(animIconHealthyHair.find("#follicle"), 1,
							{scale: 0, transformOrigin: "center bottom"},
							{scale: 1, ease: Elastic.easeOut}, "group-01")

					 .staggerFromTo(animIconHealthyHair.find("#cells").children(), 0.75,
									{autoAlpha: 0, scale: 0, transformOrigin: "center center"},
									{autoAlpha: 1, scale: 1, ease: Expo.easeOut}, 0.12, "group-01")

					 .add(animComplete);





/* -------------------------------------------------- */
/* MASTER TIMELINE
/* -------------------------------------------------- */

/*
var tlMasterTimelineScenes = new TimelineMax();
	tlMasterTimelineScenes.add( tlIconFingerprint )
						  .add( tlIconHacker )
						  .add( tlIconEye )

						  .add( tlIconAnonymity )
						  .add( tlIconReputation )
						  .add( tlIconPublicDecentralization )

						  .add( tlIconDataCenters )
						  .add( tlIconGettingTokens )
						  .add( tlIconFullyProtected )

						  .add( tlIconDualChainArchitecture )
						  .add( tlIconWitnessPool )
						  .add( tlIconWeightedReputationSystem )
						  .add( tlIconUnification )

						  .add( tlIconMiddlemen )
						  .add( tlIconTransactions )

						  .add( tlIconSellAnything )
						  .add( tlIconStartupLaunch )
						  .add( tlIconNoHostageSituations )
						  .add( tlIconGlobalDecentralizedSelling )
						  .add( tlIconInvisibleTransactions );
*/


/* -------------------------------------------------- */
/* ANIMATION OBSERVER
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	function animIconPauseAll() {
		"use strict";

		//tlMasterTimelineScenes.pause();

		tlIconPredictableResults.pause();
		tlIconNoMoreGuessWork.pause();
		tlIconConsistency.pause();
		tlIconHealthyHair.pause();

	};


	/* -------------------------------------------------- */
	/* CONTROLLER
	/* -------------------------------------------------- */

	function animIconController() {
		"use strict";
		//console.log("Playing animations in view.");

		if ( animIconPredictableResults.hasClass("anim-play") ) {
			
			tlIconPredictableResults.play();

		} else {

			tlIconPredictableResults.pause(0);

		} if ( animIconPredictableResults.hasClass("anim-interact") && animIconPredictableResults.hasClass("no-pointer") && !tlIconPredictableResults.isActive() ) {
			
			tlIconPredictableResults.restart();

		}





		if ( animIconNoMoreGuesswork.hasClass("anim-play") ) {
			
			tlIconNoMoreGuessWork.play();

		} else {

			tlIconNoMoreGuessWork.pause(0);

		} if ( animIconNoMoreGuesswork.hasClass("anim-interact") && animIconNoMoreGuesswork.hasClass("no-pointer") && !tlIconNoMoreGuessWork.isActive() ) {
			
			tlIconNoMoreGuessWork.restart();

		}





		if ( animIconConsistency.hasClass("anim-play") ) {
			
			tlIconConsistency.play();

		} else {

			tlIconConsistency.pause(0);

		} if ( animIconConsistency.hasClass("anim-interact") && animIconConsistency.hasClass("no-pointer") && !tlIconConsistency.isActive() ) {
			
			tlIconConsistency.restart();

		}





		if ( animIconHealthyHair.hasClass("anim-play") ) {
			
			tlIconHealthyHair.play();

		} else {

			tlIconHealthyHair.pause(0);

		} if ( animIconHealthyHair.hasClass("anim-interact") && animIconHealthyHair.hasClass("no-pointer") && !tlIconHealthyHair.isActive() ) {
			
			tlIconHealthyHair.restart();

		}

	};
	

	/* -------------------------------------------------- */
	/* ACTIONS
	/* -------------------------------------------------- */

	if ( !$isExplorer ) {

		var animIcons = document.querySelectorAll("svg.anim");


		var animIconOptions = {
			root: null,
			rootMargin: "0px",
			threshold: [1.0, 1.0, 1.0, 1.0]
		}


		animIconObserver = new IntersectionObserver(function (entries) {

			entries.forEach(function (entry) {

				if (entry.intersectionRatio > 0) {

					//observer.unobserve(entry.target);
					entry.target.classList.add("anim-play");

					$$(window).on("scrollstart", { latency: $updateInterval }, animIconPauseAll);
					$$(window).on("scrollstop", { latency: $updateInterval }, animIconController);

					//animIconController();

				} else {

					entry.target.classList.remove("anim-play");
					animIconController();

				}
			}, animIconOptions);
		});

		animIcons.forEach(function (element) {

			animIconObserver.observe(element);

		});


		/* ES6
		animIconObserver = new IntersectionObserver(entries => {

			entries.forEach(entry => {

				if (entry.intersectionRatio > 0) {

					console.log("IN VIEW");
					observer.unobserve(entry.target);

					entry.target.classList.add("no-pointer");

					animIconController();

				} else {

					console.log("NOT IN VIEW");

					entry.target.classList.remove("no-pointer");

				}

			});

		});


		animIcons.forEach(element => {

			animIconObserver.observe(element);

		});
		*/

	} else {

		$$(window).on("scrollstart", { latency: $updateInterval, leading: false, trailing: false }, animIconPauseAll);
		$$(window).on("scrollstop", { latency: $updateInterval, leading: false, trailing: false }, animIconController);

		TweenMax.delayedCall($delayInterval, animIconController);

	}
