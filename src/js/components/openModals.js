const openModals = () => {
  jQuery('.modal[data-show="true"]').modal('show');
  jQuery('.modal[data-show="true"]').data('show', '');
};

window.openModals = openModals;

console.log('openModals', openModals);
