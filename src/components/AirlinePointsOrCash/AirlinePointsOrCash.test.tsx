import React from 'react';
import { shallow, mount } from 'enzyme';
import { AirlinePointsOrCash } from './AirlinePointsOrCash';

describe('AirLinePointsOrCash', () => {
  const props = {
    data: {
      name: 'Private airline',
      tpg_valuation: 2,
      type: 'airline',
    },
    program: '',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AirlinePointsOrCash {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render the PointsOrCash Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render AirlinePointToCash', () => {
    const airline = 'Select An Airline Rewards Program';
    expect(wrapper.find('p').text()).toEqual(airline);
    expect(wrapper).toHaveLength(1);
  });
});
