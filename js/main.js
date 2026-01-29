/** AP JS - Macapá - Adventurous-rugged with orange gray borders */
const STATE_CONFIG = {
  stateCode: 'ap',
  capital: 'Macapá',
  formspreeUrl: 'https://formspree.io/f/xgoejqbw',
  colors: { primary: '#ff8c00', secondary: '#808080', accent: '#d3d3d3' },
  animations: {"enabled": true, "header": {"type": "fadeSlide", "duration": "0.7s", "easing": "ease-in-out", "delay": "0.1s"}, "sections": {"type": "riverFlow", "duration": "1.1s", "easing": "ease-out", "stagger": "0.2s"}, "hero": {"type": "waterParallax", "speed": 0.4, "direction": "vertical"}, "cards": {"type": "floatLift", "distance": 15, "shadow": "soft"}, "images": {"type": "rippleReveal", "duration": "1s", "origin": "center"}},
  interactions: {"hover": "water-lift", "scroll": "river-flow", "transitions": "fluid-ease", "click": "water-ripple"},
  premiumEffects: ["water-reflections", "amazon-green", "mist-overlay", "river-flow"]
};

const SECTIONS = ["ap-index-section--map", "ap-index-section-frequently-asked-questions-about-living-in-", "ap-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
