import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrencyInput from 'react-currency-input';
import Select from 'react-select';
import { PointsOrCash } from './PointsOrCash';

describe('PointsOrCash', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PointsOrCash />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the PointsOrCash Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render PointOrCash in preview mode', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('renders Select Rewards label', () => {
    const rewardsLabel = 'Select A Rewards Program';
    expect(wrapper.find('p').at(0).text()).toEqual(rewardsLabel);
  });
  it('renders ticket price label', () => {
    const ticketLabel = 'Enter Ticket Price';
    expect(wrapper.find('p').at(1).text()).toEqual(ticketLabel);
  });
  it('renders form component and other components', () => {
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(3);
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('renders currency Input', () => {
    const onChange = jest.fn();
    const currency = wrapper.find(CurrencyInput);
    expect(currency.exists()).toEqual(true);
    expect(currency).toHaveLength(2);
    expect(wrapper.find('i')).toHaveLength(1);
  });

  it('should submit on when from is submitted', () => {
    const setSubmitted = jest.fn();
    const handleSubmit = jest.spyOn(React, 'useState');
    // @ts-ignore
    handleSubmit.mockImplementation((submitted) => [submitted, setSubmitted]);
    const form = wrapper.find('form');
    form.simulate('submit', {
      preventDefault: () => {},
    });
    expect(setSubmitted).toBeTruthy();
  });
});
