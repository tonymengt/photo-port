import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../index';

afterEach(cleanup);

describe('About component', () => {
    // first test
    it('render', () => {
        render(<Contact/>)
    });

    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Contact/>)

        expect(asFragment()).toMatchSnapshot();
    })
    
})