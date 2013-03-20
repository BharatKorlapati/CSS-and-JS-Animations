var Gravity = {
		
	init: function() {
		
		$("#sky .block_container").css({
			height: $("#sky").outerHeight() + "px"
		});
		
		$(".handle").mouseenter(function(i) {
			$(this).animate({
				height: "20px"
			}, {
				duration: 1500,
				easing: "easeOutElastic"
			});
			
			var block = $(this).parent().next();
			
			var yposBlock = $(block).position()['top'] - $("#sky").position()['top'];
			var fallDist = ($("#sky").outerHeight() - yposBlock) - $(block).outerHeight();
			
			$(block).animate({
				marginTop: fallDist+"px"
			}, {
				duration: 1000,
				easing: "easeOutBounce"
			});
		});
	
	},
}

$(document).ready(function(){
	Gravity.init();
	
	$("#reset").click(function() {
		$(".handle").stop().animate({
			height: "60px"
		},{
			duration: 1000,
			easing: "easeOutElastic"
		});
		
		$(".block").stop().animate({
			marginTop: "0px"
		},{
			duration: 1750,
			easing: "easeOutElastic"
		});
	});

});

$(function () {
	var s = null,

	AnimationSpace = {
		settings: {
			startButton: $("#startbutton")
		},

		startAnimation: function () {
			s = this.settings;
			$("#startbutton").click(function(){
				$("div.target").toggleClass("animate");
				if (s.startButton.attr("value") === "ANIMATE THE SCENE") {
					s.startButton.attr("value", "RESET THE ANIMATION");
				} else {
					s.startButton.attr("value", "ANIMATE THE SCENE");	
				}
			});
		}

	};

	AnimationSpace.startAnimation();
});
