import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();
  const mockContactSelected = jest.fn();
  const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav Component', () => {
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            setContactSelected={mockSetContactSelected}
            contactSelected={mockContactSelected}
        />);
    });

    it('match snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            setContactSelected={mockSetContactSelected}
            contactSelected={mockContactSelected}
        />);

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji is visible', () => {
    it('insert emoji into the h2', () => {
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            setContactSelected={mockSetContactSelected}
            contactSelected={mockContactSelected}
            />);

        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
});

describe('links are visible', () => {
    it('inserts text into links', () => {
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            setContactSelected={mockSetContactSelected}
            contactSelected={mockContactSelected}
        />)

        expect(getByTestId("link")).toHaveTextContent('Oh Snap!')
        expect(getByTestId("about")).toHaveTextContent('About Me')
    })
})