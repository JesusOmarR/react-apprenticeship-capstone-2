import React from 'react'
import { render, getByRole, screen, waitFor } from '@testing-library/react'
import MainPage from '..'

describe('Tetsing Main Page', () => {
  it('render HomePage', () => {
    render(<MainPage />)
  })

  it('renders the image of the day', async () => {
    render(<MainPage />)

    let img
    await waitFor(() => (img = screen.getByRole('img')))
    console.log(img)
  })
})
