import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { PointsOrCash } from './components/pointsOrCash/PointsOrCash';
import App from './App';

describe('Point to Cash App component', () => {
  const wrapper = shallow(<App />);
  it('renders App component', () => {
    expect(wrapper.find('.App')).toHaveLength(1);
  });
  it('renders points to cash sub component', () => {
    expect(wrapper.find(PointsOrCash)).toHaveLength(1);
  });
});
