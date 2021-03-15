import React from 'react';
import { shallow } from 'enzyme';
import { PointsOrCash } from './PointsOrCash';

describe('PointsOrCash', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<PointsOrCash />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render the PointsOrCash Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
  it('renders Select Rewards label', () => {
    const rewardsLabel = 'Select A Rewards Program';
    expect(wrapped.find('p').at(0).text()).toEqual(rewardsLabel);
  });
  it('renders ticket price label', () => {
    const ticketLabel = 'Enter Ticket Price';
    expect(wrapped.find('p').at(1).text()).toEqual(ticketLabel);
  });
  it('renders form component and other components', () => {
    expect(wrapped.find('form')).toHaveLength(1);
    expect(wrapped.find('p')).toHaveLength(3);
    expect(wrapped.find('button')).toHaveLength(1);
  });
});
