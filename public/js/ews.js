var headerFooterHeight = $('nav').height() + $('#footer').height();
var bodyHeight = $(window).height();
console.log(headerFooterHeight);

$('main').height(bodyHeight - headerFooterHeight);