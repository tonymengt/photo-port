import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../index';

afterEach(cleanup);

describe('About component', () => {
    // first test
    it('render', () => {
        render(<About/>)
    });

    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<About/>)

        expect(asFragment()).toMatchSnapshot();
    })
    
})