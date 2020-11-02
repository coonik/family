$(document).ready(() => {
  const icon = $('#nav-menu');
  icon.click(() => {
    $('.nav-list ul').slideToggle(200);
    if (icon.attr('name') === 'menu-outline') {
      icon.attr('name', 'close-outline');
    } else {
      icon.attr('name', 'menu-outline');
    }
  });
});
