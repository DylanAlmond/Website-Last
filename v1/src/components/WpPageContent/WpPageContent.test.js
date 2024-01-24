import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WpPageContent from './WpPageContent';

describe('<WpPageContent />', () => {
  test('it should mount', () => {
    render(<WpPageContent />);
    
    const wpPageContent = screen.getByTestId('WpPageContent');

    expect(wpPageContent).toBeInTheDocument();
  });
});