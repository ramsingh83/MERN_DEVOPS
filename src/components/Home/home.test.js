import React from 'react';
import Home from './index';
import { shallow } from 'enzyme';

it('renders Home component without crashing', () => {
  shallow(<Home />);
});
