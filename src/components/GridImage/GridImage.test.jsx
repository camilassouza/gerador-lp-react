import { expect } from '@storybook/test';
import { screen } from '@testing-library/react';
import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme'
describe('<GridImage />', () => {
    it('shold render', () => {
        renderTheme(<GridImage>Children</GridImage>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    })
})