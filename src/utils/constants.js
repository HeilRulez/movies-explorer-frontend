export const configApi = {
  baseMovies: 'https://api.nomoreparties.co',
  baseUrl: 'https://api.tvoyomesto.nomorepartiesxyz.ru',
  type: 'application/json',
  regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  durationMovies: 40,
  amountCard: loadMore,
  startAmountCard: bootstrapper,
}

function bootstrapper() {
  const width = window.screen.width;
  if (width > 1280) {
    return 12
  } else if (width > 768) {
    return 8
  } else {
    return 5
  }
}

function loadMore() {
  if (window.screen.width < 1280) {
    return 2
  } else {
    return 3
  }
}
