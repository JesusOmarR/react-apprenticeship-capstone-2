import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import MainPage from '..'

import POD from '../../../mocks/pictureOfTheDay.mock.json'
import POD12 from '../../../mocks/pictureOf01-2-21-Day.json'
import setupFetchStub from '../../../mocks/fetchStub'

describe('Testing Main Page', () => {
  it('render HomePage', () => {
    render(<MainPage />)
  })

  // Testing date input
  it('renders the input date', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(setupFetchStub(POD))
    render(<MainPage />)

    await waitFor(() => expect(screen.findByRole('input')).toBeInTheDocument)

    global.fetch.mockClear()
  })

  // Testing the fetch when the input change
  it('render the information the image of the day after a date was gived', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(setupFetchStub(POD))
    render(<MainPage />)

    const input = screen.getByLabelText('Select a date')
    const button = screen.getByRole('button')
    fireEvent.change(input, { target: { value: '2022-01-12' } })
    jest.spyOn(global, 'fetch').mockImplementation(setupFetchStub(POD12))
    await waitFor(() => fireEvent.click(button))
    expect(screen.findByText('2022-01-12').toBeInTheDocument)
    expect(screen.getByRole('img').toBeInTheDocument)

    global.fetch.mockClear()
  })

  // Testing when the date is invalid

  it('trhows an error message when the date is invalid', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(
      setupFetchStub({
        code: 400,
        msg: 'Date must be between Jun 16, 1995 and Jan 24, 2022.',
        service_version: 'v1',
      })
    )
    render(<MainPage />)

    await waitFor(
      () =>
        expect(
          screen.getByText(
            'Date must be between Jun 16, 1995 and Jan 24, 2022.'
          )
        ).toBeInTheDocument
    )
    global.fetch.mockClear()
  })

  // Testing unexpected error
  it('throws an error when an unexpected error courred', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(
      setupFetchStub({
        code: 500,
        msg: 'There was an error, please try again',
      })
    )
    render(<MainPage />)

    await waitFor(
      () =>
        expect(screen.getByText('There was an error, please try again'))
          .toBeInTheDocument
    )
    global.fetch.mockClear()
  })
})
