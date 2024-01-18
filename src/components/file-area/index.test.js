import React from 'react';
import { render, screen } from '@testing-library/react';
import FileArea from './index';

describe('FileArea', () => {
    test('renders Sort and FileList components', () => {
        render(<FileArea />);
        
        expect(screen.getByTestId('sort-component')).toBeInTheDocument();
        expect(screen.getByTestId('file-list')).toBeInTheDocument();
    });
});
