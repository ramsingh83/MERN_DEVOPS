import React from 'react';
import Create from './index';
import { shallow } from 'enzyme';

it('renders Create component without crashing', () => {
  shallow(<Create />);
});
