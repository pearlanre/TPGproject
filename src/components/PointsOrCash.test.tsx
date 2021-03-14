import React from 'react';
import { render, screen } from '@testing-library/react';
import { PointsOrCash } from './PointsOrCash';

test('renders Point to Cash Calculator', () => {
  const component = render(<PointsOrCash />);
});
