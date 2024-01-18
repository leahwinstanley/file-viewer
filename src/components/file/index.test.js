/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import File from './index';

describe('File component', () => {
    const data = {
        name: 'example',
        type: 'folder',
        files: [
            { name: 'file1.txt', type: 'text/plain', size: '1' },
            { name: 'file2.txt', type: 'text/plain', size: '2.1' },
        ],
        size: 2,
        added: '2022-01-01',
    };

    it('renders file name and details', () => {
        const { getByText, getByTestId } = render(<File data={data} />);
        expect(getByTestId('name')).toHaveTextContent('example');
        expect(getByText('folder', {exact:false})).toBeInTheDocument();
        expect(getByText('2MB', {exact:false})).toBeInTheDocument();
        expect(getByText('date added: 2022-01-01', {exact:false})).toBeInTheDocument();
    });

    it('renders child files and shows them when active', () => {
        const { getByText } = render(<File data={data} active={true} />);
        expect(getByText('file1.txt', {exact:false})).toBeInTheDocument();
        expect(getByText('file2.txt', {exact:false})).toBeInTheDocument();
    });

    it('calls handleClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<File data={data} handleClick={handleClick} />);
        fireEvent.click(getByTestId('file'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
