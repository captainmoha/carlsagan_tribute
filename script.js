$(document).ready(function() {
		$('.twitter-share-button').bind('click', function (event) {
		var tweet = $(this);
		var imgURL = '';

		switch(tweet.attr('id')) {
			case 'q1': {
				imgURL = 'pic.twitter.com/vF0TOLXW6w';
				break;
			}
			case 'q2': {
				imgURL = 'pic.twitter.com/360B2RLdMb';
				break;
			}
			case 'q3': {
				imgURL = 'pic.twitter.com/yR76YojuEl';
				break;
			}
			case 'q4': {
				imgURL = 'pic.twitter.com/gMtjUPQXEC';
				break;
			}
		}
		tweet.attr('href', 'https://twitter.com/intent/tweet?hashtags=javascript%2Ccarlsagan&text=Carl+Sagan+once+said ' + imgURL + '&via=captainmoha');
	});
});