import { expect } from '@storybook/test';
import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme'
describe('<Footer />', () => {
    it('shold render', () => {
        renderTheme(<Footer>Children</Footer>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    })
})