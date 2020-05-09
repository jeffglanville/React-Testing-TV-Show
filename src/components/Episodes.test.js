import React from "react";
import { render } from '@testing-library/react';
import Episodes from './Episodes';

test("Episode is rendering properly", () => {
    const { getByText } = render(<Episodes />);

    const text = getByText("episode")
    expect(text).toBeInTheDOM();
})