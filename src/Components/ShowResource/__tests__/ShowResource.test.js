import { render, screen } from '@testing-library/react'
import ShowResource from '..'

import POD from '../../../mocks/pictureOfTheDay.mock.json'

describe('Tests the show resource component', () => {
  it('renders the component', () => {
    render(<ShowResource source={POD.url} />)
  })

  it('render an image with the picture of the day', () => {
    render(<ShowResource source={POD.url} />)
    screen.getByRole('img')
  })
})
