import queryString from 'query-string';

export function apiCall(request) {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    const fetchData = {
      method: request.method,
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };

    let fetchUrl = process.env.MIX_REACT_APP_DOMAIN_URL + '/api/' + request.url;

    if (request.query !== undefined) {
      const data = queryString.stringify(request.query, { arrayFormat: 'bracket' });
      fetchUrl = fetchUrl + '?' + data;
    }

    if (request.data !== undefined) {
      fetchData.body = JSON.stringify(request.data);
    }

    fetch(fetchUrl, fetchData)
      .then((response) => {
        if (response.status < 400) {
          resolve(response.json());
        } else {
          reject(response.json());
        }
      }).catch((error) => {
        reject(error);
      });
  });
}
