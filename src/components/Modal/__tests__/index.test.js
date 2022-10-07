import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup);

//test Modal component
describe('Modal component', () => {
    //baseline test
    it('renders', () => {
        render(<Modal 
            currentPhoto={currentPhoto}
        />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render (<Modal
            currentPhoto={currentPhoto}
            toggleModal={ mockToggleModal }
        />);
        expect(asFragment()).toMatchSnapshot;
    })
})

//test close button on modal
describe('Click event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

        //simulate user click event
        fireEvent.click(getByText('Close this modal'));

        //assert the event
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})