import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardGrid from './CardGrid';

describe('<CardGrid />', () => {
  test('it should mount', () => {
    render(<CardGrid />);
    
    const cardGrid = screen.getByTestId('CardGrid');

    expect(cardGrid).toBeInTheDocument();
  });
});