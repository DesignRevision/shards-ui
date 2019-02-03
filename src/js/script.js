const BeCompRating = (function() {
	// jQuery Raty, for more examples you can check out https://github.com/wbotelhos/raty

	// Init Rating
	const initRating = function() {
		// Set Default options
		jQuery.fn.raty.defaults.starType = 'i';
		jQuery.fn.raty.defaults.hints = [
			'Just Bad!',
			'Almost There!',
			'It’s ok!',
			'That’s nice!',
			'Incredible!'
		];

		// Init Raty on .js-rating class
		jQuery('.js-rating').each(function() {
			const ratingEl = jQuery(this);

			ratingEl.raty({
				score: ratingEl.data('score') || 0,
				number: ratingEl.data('number') || 5,
				cancel: ratingEl.data('cancel') || false,
				target: ratingEl.data('target') || false,
				targetScore: ratingEl.data('target-score') || false,
				precision: ratingEl.data('precision') || false,
				cancelOff:
					ratingEl.data('cancel-off') || 'fa fa-fw fa-times-circle text-danger',
				cancelOn: ratingEl.data('cancel-on') || 'fa fa-fw fa-times-circle',
				starHalf:
					ratingEl.data('star-half') || 'fa fa-fw fa-star-half-o text-warning',
				starOff: ratingEl.data('star-off') || 'fa fa-fw fa-star text-muted',
				starOn: ratingEl.data('star-on') || 'fa fa-fw fa-star text-warning',
				click(score, evt) {
					// Here you could add your logic on rating click
					// console.log('ID: ' + this.id + "\nscore: " + score + "\nevent: " + evt);
				}
			});
		});
	};

	return {
		init() {
			// Init all Ratings
			initRating();
		}
	};
})();

// Initialize when page loads
jQuery(function() {
	BeCompRating.init();
});
