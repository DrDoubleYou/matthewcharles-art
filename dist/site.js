document.getElementById('year').textContent = new Date().getFullYear();
const styles = ['tidal-bloom', 'sunset-poetry', 'wild-iris'];
const requestedStyle = new URLSearchParams(location.search).get('style');
if (styles.includes(requestedStyle)) {
  document.querySelectorAll('.lettering').forEach(image => {
    image.src = 'assets/' + requestedStyle + '.png';
  });
}
