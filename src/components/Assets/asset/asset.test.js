import React from 'react';
import TableRow from './index';
import { shallow } from 'enzyme';

const asset = {
  createrName: 'Ram',
  assetName: "Singh",
  assetNumber: 1
};

it('renders TableRow component without crashing', () => {
  shallow(<TableRow asset={asset} />);
});
