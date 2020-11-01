$(document).ready(() => {
  $('#nav-menu').click(($event) => {
    const nav = $('.nav-mobile :first-child')[1];
    nav.slideToggle(200);
  });
});
