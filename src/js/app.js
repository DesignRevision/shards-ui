// External Plugin Import
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap-datepicker';
import 'raty-js';

// Internal Plugin Import
import './sliderPlugin';

// Internal Scripts
import './pluginConfigurations';
import './components/reviewRating';

const openModals = () => {
  jQuery('.modal[data-show="true"]').modal('show');
  jQuery('.modal[data-show="true"]').data('show', '');
};

window.openModals = openModals;

window.jQuery = $;
window.$ = $;
