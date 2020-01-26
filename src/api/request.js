const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const request = (url, options = {}) => {
  const requestOptions = {
    method: options.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...options.headers
    },
    body: JSON.stringify(options.body)
  };

  return fetch(url, requestOptions).then(async res => {
    if (res.ok) {
      return await res.json();
    } else {
      const errMsg = await res.text();
      const error = new Error(errMsg || res.statusText);
      throw error;
    }
  });
};

export default request;
