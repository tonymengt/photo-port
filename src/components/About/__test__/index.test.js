import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../index';

afterEach(cleanup);

describe('About component', () => {
    // first test
    it('renders', () => {
        render(<About/>)
    });

    
})