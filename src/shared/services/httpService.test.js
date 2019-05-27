import * as http from './httpService';
import fetchMock from 'fetch-mock';

describe('sendRequest', () => {
  it('can GET', async () => {
    const testConfig = {
      url: 'http://localhost',
      config: {
        method: 'get'
      }
    };

    // Mock the response to the GET request.
    fetchMock.get(testConfig.url, { foo: 'bar' });

    const response = await http.sendRequest(testConfig.url, testConfig.config);
    const result = await response.json();

    expect(response).toBeDefined();
    expect(response.status).toEqual(200);
    expect(result.foo).toEqual('bar');
  });

  it('can POST', async () => {
    const testConfig = {
      url: 'http://localhost',
      config: {
        method: 'post',
        body: JSON.stringify({
          foo: 'bar'
        })
      }
    };

    // Mock the response to the POST request.
    fetchMock.post(testConfig.url, { body: { status: 'success', ...testConfig.body } });

    const response = await http.sendRequest(testConfig.url, testConfig.config);
    const result = await response.json();

    expect(response).toBeDefined();
    expect(response.status).toEqual(200);
    expect(result.status).toEqual('success');
  });
});
