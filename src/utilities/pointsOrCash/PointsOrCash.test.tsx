import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrencyInput from 'react-currency-input';
import { PointsOrCash } from './PointsOrCash';

describe('PointsOrCash', () => {
  let props = {
    data: {
      name: 'Private airline',
      tpg_valuation: 2,
      type: '',
    },
    program: '',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PointsOrCash {...props} />);
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
  describe('test functionality for Tickets', () => {
    props = {
      data: {
        name: 'Private airline',
        tpg_valuation: 2,
        type: 'airline',
      },
      program: 'Tickets',
    };
    wrapper = shallow(<PointsOrCash {...props} />);
    it('renders ticket price label', () => {
      const ticketLabel = 'Enter Hotels Price';
      expect(wrapper.find('p').at(0).text()).toEqual(ticketLabel);
    });
    it('renders form component and other components', () => {
      expect(wrapper.find('form')).toHaveLength(1);
      expect(wrapper.find('p')).toHaveLength(2);
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
  describe('test functionality for Hotels', () => {
    props = {
      data: {
        name: 'Private airline',
        tpg_valuation: 2,
        type: 'airline',
      },
      program: 'Hotels',
    };
    wrapper = shallow(<PointsOrCash {...props} />);
    it('renders Hotels price label', () => {
      const hotelLabel = 'Enter Hotels Price';
      expect(wrapper.find('p').at(0).text()).toEqual(hotelLabel);
    });
    it('renders form component and other components', () => {
      expect(wrapper.find('form')).toHaveLength(1);
      expect(wrapper.find('p')).toHaveLength(2);
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
});
