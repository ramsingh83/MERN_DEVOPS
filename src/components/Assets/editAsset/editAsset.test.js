import React from 'react';
import Edit from './index';
import { shallow } from 'enzyme';

const match = {
  params : { 
    baseId : 1 //any id you want to set
  }
 };

describe('Edit component', () => {
  it('renders Edit component without crashing', () => {
    shallow(<Edit match={match} />);
  });
});


