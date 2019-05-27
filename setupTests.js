import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
// import fetch from '../src/__mocks__/fetch';

// global.fetch = fetch;

configure({ adapter: new Adapter() });
