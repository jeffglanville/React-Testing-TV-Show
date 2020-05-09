import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


test("App is rendering movie", () => {
    const { getByText } = render(<App />);

    const text = getByText(/Fetching data.../i);
    expect(text).toBeInTheDocument();
});

test('Axios is returning a show', () => {
    const axios = {
        get: jest.fn(() => Promise.resolve({data: { episodes: "Season" }})),
    }
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
    render(<App url={ url } />)
    expect(axios.get).toHaveBeenCalledTimes(0)
})

