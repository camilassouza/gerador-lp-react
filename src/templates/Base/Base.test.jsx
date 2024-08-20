import { expect } from '@storybook/test';
import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/render-theme'
describe('<Base />', () => {
    it('shold render', () => {
        renderTheme(<Base>Children</Base>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    })
})