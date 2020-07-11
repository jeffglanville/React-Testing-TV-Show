import React from "react";
import { render, wait } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { movieData } from "./mockData";
import userEvent from  '@testing-library/user-event'

jest.mock('./api/fetchShow')

test('app is rendering the show', () => {
    mockFetchShow.mockResolvedValueOnce(movieData);
    const {getByText} = render(<App />)
    getByText(/episode/i)
})

test('after episode is selected correctly renders' , async () => {
    mockFetchShow.mockResolvedValueOnce(movieData);

    const { getByText } = render(<App />)

    await wait( () => { getByText(/Select a season/i)
    userEvent.click()
    const text = getByText(/Season 1/i)
    expect(text).toBeInTheDocument()
    userEvent.click(text)
    getByText(/Season 1, Episode 1/i)
    })
})