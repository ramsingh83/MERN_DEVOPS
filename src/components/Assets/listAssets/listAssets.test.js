import React from 'react';
import { shallow } from 'enzyme';
import List from './index';
import axios from 'axios';
 
jest.mock('axios');
 
describe('List component', () => {
  describe('when rendered', () => {
    it('should fetch a list of assets', () => {
      const getSpy = jest.spyOn(axios, 'get');
      const listInstance = shallow(
        <List/>
      );
      expect(getSpy).toBeCalled();
    });
  });
});