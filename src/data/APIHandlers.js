export const getCountryListFromAPI = () =>
  fetch('https://api.covid19api.com/summary')
    .then(response => {
      const { status } = response;
      if (response.ok) return response.json();
      if (status > 300) throw Error();
      return null;
    })
    .catch(error => console.warn(error));
