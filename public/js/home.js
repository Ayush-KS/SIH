
// Refs
const wrapCta = document.querySelector('#wrap-cta'),
btnCta = document.querySelector('#cta'),
content = document.querySelector('#content'),
btnClose = document.querySelector('#close');
//const heading = document.querySelector('#heading');


// Anime.js Commons Values for SVG Morph
const common = {
  targets: '.polymorph',
  easing: 'easeOutQuad',
  duration: 600,
  loop: false };

  $('.container').css('display', 'none');

// Show content
btnCta.addEventListener('click', () => {
  // Elements apparence
  wrapCta.classList.remove('active');
  content.classList.add('active');

  setTimeout(function() {
      $('.container').css('display', 'block');
      $('.container').css('transition', 'all 1s ease-in-out');
    }, 330);
  
  $('#state-info-card,#bribe-details').css('display', 'none');

  // Morph SVG
  anime({
    ...common,
    points: [
    { value: '215,110 0,110 186,86 215,0' }] });
});


// Hide content  
btnClose.addEventListener('click', () => {
  // Elements apparence
  content.classList.remove('active');
  wrapCta.classList.add('active');
  
  
  
$('#state-info-card,#bribe-details').css('display', 'block');

  // Morph SVG
  anime({
    ...common,
    points: [
    { value: '215,110 0,110 0,0 215,0' }] });

    $('.container').css('display', 'none');
});