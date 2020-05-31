import React from 'react';
import { render } from '@testing-library/react';
import App from '../client/components/App';

test('renders Welcome Message on homepage', () => {
  const { getByText } = render(<App />);
  const welcomeMessage = getByText(/Welcome to Survey Shark!/i);
  expect(welcomeMessage).toBeInTheDocument();
});