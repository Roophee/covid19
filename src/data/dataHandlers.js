const sortAlphabetIncrease = (a, b) => {
  if (a.Country < b.Country) {
    return -1;
  }
  if (a.Country > b.Country) {
    return 1;
  }
  return 0;
};

const sortAlphabetDecrease = (a, b) => {
  if (b.Country < a.Country) {
    return -1;
  }
  if (b.Country > a.Country) {
    return 1;
  }
  return 0;
};

const sortTotalConfirmedIncrease = (a, b) => {
  if (a.TotalConfirmed < b.TotalConfirmed) {
    return -1;
  }
  if (a.TotalConfirmed > b.TotalConfirmed) {
    return 1;
  }
  return 0;
};

const sortTotalConfirmedDecrease = (a, b) => {
  if (b.TotalConfirmed < a.TotalConfirmed) {
    return -1;
  }
  if (b.TotalConfirmed > a.TotalConfirmed) {
    return 1;
  }
  return 0;
};

export const getSortFunction = value => {
  switch (value) {
    case 'alphaInc':
      return sortAlphabetIncrease;
    case 'alphaDec':
      return sortAlphabetDecrease;
    case 'totalInc':
      return sortTotalConfirmedIncrease;
    case 'totalDec':
      return sortTotalConfirmedDecrease;
    default:
      return '';
  }
};

export const filterDataOnSearch = (data, searchValue) =>
  data.filter(item => item.Country.toLowerCase().startsWith(searchValue.toLowerCase()));
