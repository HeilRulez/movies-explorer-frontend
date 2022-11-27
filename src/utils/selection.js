export default function selectMovies(data, phrase, checked) {
  let sarchedMovie = data.filter(item => (
    item.nameRU.toString().includes(phrase.toString())
    ));
  if (checked) {
    sarchedMovie = sarchedMovie.filter(item => (item.duration < 40))
  };
  return sarchedMovie;
}
