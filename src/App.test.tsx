import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Point to Cash App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the PointsOrCash Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders App component', () => {
    expect(wrapper.find('.App')).toHaveLength(1);
  });
  it('renders heading', () => {
    wrapper = shallow(<App />);
    const heading = 'Cash to Points Calculator';
    expect(wrapper.find('h1').text()).toEqual(heading);
  });
  it('renders Select Text', () => {
    wrapper = shallow(<App />);
    const heading = 'Select Air Tickets or Hotels';
    expect(wrapper.find('p').text()).toEqual(heading);
  });
});
