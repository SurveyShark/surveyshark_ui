import React from 'react'
import { render } from '@testing-library/react'
import App from '../client/components/App'

test('renders Welcome Message on homepage', () => {
  const { getByText } = render(<App />)
  const welcomeMessage = getByText(/Get started/i)
  expect(welcomeMessage).toBeInTheDocument()
})
