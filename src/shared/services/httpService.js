// Import the fetch polyfill.
import 'whatwg-fetch';

/**
 * Generic function to send API Requests.
 * Usage example:
 * const response = await http.sendRequest(url, config);
 * if (!response.ok) {
 *  Error Handling
 * }
 * @param {String} url - the url to perform the request against.
 * @param {Object} config - the config for the http call
 * @returns {Function} response - the request.
 */
async function sendRequest(url, config) {
  return fetch(url, config);
}

export { sendRequest };
