const reviewRating = (function() {
	// jQuery Raty, for more examples you can check out https://github.com/wbotelhos/raty

	// Init Rating
	const initRating = function() {
		jQuery.fn.raty.defaults.starType = 'i';
		jQuery.fn.raty.defaults.hints = [
			'Péssima!',
			'Não muito boa.',
			'Legal!',
			'Muito boa!',
			'Excelente!'
		];

		// Init Raty on .js-rating class
		jQuery('.js--review-rating').each(function() {
			const ratingEl = jQuery(this);

			ratingEl.raty({
				score: ratingEl.data('score') || null,
				number: ratingEl.data('number') || 5,
				cancel: ratingEl.data('cancel') || false,
				target: ratingEl.data('target') || false,
				targetKeep: ratingEl.data('target-keep') || false,
				targetScore: ratingEl.data('target-score') || false,
				noRatedMsg: ratingEl.data('no-rated-msg') || '',
				precision: ratingEl.data('precision') || false,
				cancelOff:
					ratingEl.data('cancel-off') || 'fa fa-fw fa-times-circle text-danger',
				cancelOn: ratingEl.data('cancel-on') || 'fa fa-fw fa-times-circle',
				starHalf:
					ratingEl.data('star-half') || 'fa fa-fw fa-star-half-o text-warning',
				starOff: ratingEl.data('star-off') || 'fa fa-fw fa-star text-muted',
				starOn: ratingEl.data('star-on') || 'fa fa-fw fa-star text-warning',
				click(score, evt) {
					console.log(`ID: ${this.id}\nscore: ${score}\nevent: ${evt}`);
				}
			});
		});
	};

	return {
		init() {
			initRating();
		}
	};
})();

jQuery(function() {
	reviewRating.init();
});
