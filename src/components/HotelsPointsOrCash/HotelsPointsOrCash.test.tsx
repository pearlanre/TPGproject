import React from 'react';
import { shallow, mount } from 'enzyme';
import { HotelsPointsOrCash } from './HotelsPointsOrCash';

describe('AirLinePointsOrCash', () => {
  const props = {
    data: {
      name: 'Private hotel',
      tpg_valuation: 2,
      type: 'hotel',
    },
    program: '',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HotelsPointsOrCash {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render the PointsOrCash Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render HotelPointToCash', () => {
    const hotel = 'Select A Hotel Rewards Program';
    expect(wrapper.find('p').text()).toEqual(hotel);
    expect(wrapper).toHaveLength(1);
  });
});
