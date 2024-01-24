import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialMediaBar from './SocialMediaBar';

describe('<SocialMediaBar />', () => {
  test('it should mount', () => {
    render(<SocialMediaBar />);
    
    const socialMediaBar = screen.getByTestId('SocialMediaBar');

    expect(socialMediaBar).toBeInTheDocument();
  });
});