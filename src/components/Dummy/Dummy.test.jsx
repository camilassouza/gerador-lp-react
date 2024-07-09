import { expect } from '@storybook/test';
import { screen } from '@testing-library/react';
import { teste } from '.';
import { renderTheme } from '../../styles/render-theme'
describe('<teste />', () => {
    it('shold render', () => {
        renderTheme(<teste>Children</teste>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    })
})