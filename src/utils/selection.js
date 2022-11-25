export default function selectMovies(data) {
  let sarchedMovie = data.filter(item => (
    item.nameRU.toLowerCase().includes(JSON.parse(localStorage.getItem('searchParam')).phrase.toString().toLowerCase())
    ));
  if (JSON.parse(localStorage.getItem('searchParam')).checked) {
    sarchedMovie = sarchedMovie.filter(item => (item.duration < 40))
  };
  return sarchedMovie;
}
