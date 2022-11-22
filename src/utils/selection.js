export default function selectMovies(data) {
  let sarchedMovie = data.filter(item => (
    item.nameRU.toLowerCase().includes(localStorage.getItem('phrase').toString().toLowerCase())
    ));
  if (localStorage.getItem('checked')) {
    sarchedMovie = sarchedMovie.filter(item => (item.duration < 40))
  };
  return sarchedMovie;
}
