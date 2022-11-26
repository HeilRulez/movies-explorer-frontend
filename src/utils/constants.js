export const configApi = {
  baseMovies: 'https://api.nomoreparties.co',
  baseUrl: 'http://localhost:3000',
  // baseUrl: 'https://api.tvoyomesto.nomorepartiesxyz.ru',
  type: 'application/json',
  amountCard: (window.screen.width < '1280' ? (2) : (3)),
  startAmountCard: checkWidth,
}

function checkWidth() {
  const width = window.screen.width;
  if (width > 1024) {
    return 12
  } else if (width > 768) {
    return 8
  } else {
    return 5
  }
}
