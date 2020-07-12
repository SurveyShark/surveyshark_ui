import React from 'react'
import { render } from '@testing-library/react'
import MainContent from '../client/components/MainContent'

test('renders Welcome Message on homepage', () => {
  const { getByText } = render(<MainContent />)
  const startButton = getByText('Start')
  expect(startButton).toBeInTheDocument()
})
