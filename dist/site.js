// Numbered previews change only the lettering; the homepage has no controls.
const requested = new URLSearchParams(location.search).get('style');
if (/^(?:[1-9]|[12]\d|30)$/.test(requested || '')) {
  document.getElementById('lettering').src = `assets/lettering-${requested.padStart(2, '0')}.png`;
}
