import { configApi } from './constants';

export default function selectMovies(data, phrase, checked) {
  let sarchedMovie = data.filter(item => (
    item.nameRU.toString().includes(phrase.toString())
    ));
  if (checked) {
    sarchedMovie = sarchedMovie.filter(item => (item.duration < configApi.durationMovies))
  };
  return sarchedMovie;
}
