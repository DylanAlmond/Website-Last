import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostPageContent from './PostPageContent';

describe('<PostPageContent />', () => {
  test('it should mount', () => {
    render(<PostPageContent />);
    
    const postPageContent = screen.getByTestId('PostPageContent');

    expect(postPageContent).toBeInTheDocument();
  });
});