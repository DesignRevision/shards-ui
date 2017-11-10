/**
 * Shards — Main demo page script.
 */

// Main demo script.
(function ($) {
  $(document).ready(function() {

    // Hide the loader and show the elements.
    setTimeout(function () {
      $('.loader').addClass('hidden').delay(200).remove();
      $('.slide-in').each(function() {
        $(this).addClass('visible');
      });
    }, 1900);

    // Enable popovers everywhere.
    $('[data-toggle="popover"]').popover();

    // Enable tooltips everywhere.
    $('[data-toggle="tooltip"]').tooltip();

    // Disable example anchors scroll to top action.
    $('.example a').click(function(event) {
        event.target.getAttribute('href') === '#' && event.preventDefault();
    });

    // Hook the "Learn More" button event to scroll to content.
    $('#scroll-to-content').click(function(ev) {
      ev.preventDefault();
      if (typeof ev.target.dataset.scrollTo === 'undefined') {
        return;
      }

      $('html, body').animate({
        scrollTop: $(ev.target.dataset.scrollTo).offset().top - 100
      }, 1000)
    });

    //
    // Setup examples.
    //

    // Slider example 1.
    $('#slider-example-1').customSlider({
      start: [20, 80],
      range: {
        min: 0,
        max: 100
      },
      connect: true
    });

    // Slider example 2.
    $('#slider-example-2').customSlider({
      start: [20, 80],
      range: {
        min: 0,
        max: 100
      },
      connect: true,
      tooltips: true
    });

    // Slider example 3.
    $('#slider-example-3').customSlider({
      start: [20, 80],
      range: {
        min: 0,
        max: 100
      },
      connect: true,
      tooltips: true,
      pips: {
        mode: 'positions',
        values: [0, 25, 50, 75, 100],
        density: 5
      }
    });

    // Datepicker example 1.
    $('#datepicker-example-1').datepicker({});

    // Datepicker example 2.
    $('#datepicker-example-2').datepicker({});
  });
})(jQuery);
