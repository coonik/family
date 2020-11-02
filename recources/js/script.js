$(document).ready(() => {
  $('#nav-menu').click(($event) => {
    const nav = $('.nav-mobile ul');
    nav.slideToggle(200);
  });
});
