import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WpPage from './WpPage';

describe('<WpPage />', () => {
  test('it should mount', () => {
    render(<WpPage />);
    
    const wpPage = screen.getByTestId('WpPage');

    expect(wpPage).toBeInTheDocument();
  });
});