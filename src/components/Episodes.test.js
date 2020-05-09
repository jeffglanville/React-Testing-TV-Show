import React from "react";
import { render } from '@testing-library/react';
import Episodes from './Episodes';

test("Episode is rendering properly", () => {
    const { queryByTestId} = render(<Episodes episodes={[]} />);

    // const text = queryByTestId("episodes")
    // expect(text).not.toHaveTextContent("episodes");
})

// test("Episode image is showing", () => {
//     const { getByAltText } = render(<Episodes />);

//     const altText = getByAltText("{e.name}")
//     expect(altText).toBeInTheDOM();
// })