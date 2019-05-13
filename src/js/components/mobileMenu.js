const mobileMenu = () => {
  jQuery('.js--header__sidebar-button').on('click', () => {
    jQuery('.main-sidebar').toggleClass('open');
    jQuery('body').toggleClass('is-menu-open');
  });

  jQuery('.js--header__side-rules').on('click', () => {
    jQuery('.main-sidebar').toggleClass('open');
  });
};

window.mobileMenu = mobileMenu;

console.log('mobileMenu', mobileMenu);
