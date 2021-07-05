import React from "react";
import { render } from '@testing-library/react';
import Episodes from './Episodes';

test('Episode is rendering correctly', () => {
    const{queryAllByTestId, queryAllByText} = render(<Episodes episodes={[]}/>)

    expect(queryAllByTestId(/episode/i)).toHaveLength(0);

    expect(queryAllByText(/chapter/i)).toHaveLength(0);
})
