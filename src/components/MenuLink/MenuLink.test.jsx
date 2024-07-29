import { expect } from '@storybook/test';
import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme'
describe('<MenuLink />', () => {
    it('shold render link', () => {
        renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
        expect(screen.getByRole('link', {name: 'Children'})).toHaveAttribute('target', '_self');
    })

    it('shold render open in a new tab', () => {
        renderTheme(<MenuLink link="http://localhost" newtab={true}>Children</MenuLink>);
        expect(screen.getByRole('link', {name: 'Children'})).toHaveAttribute('target', '_blank');
    })

    it('shold render open in a new tab span', () => {
        renderTheme(<MenuLink link="http://localhost" newtab={true}>Children</MenuLink>);
        expect(screen.getByRole('link', {name: 'Children'})).toMatchInlineSnapshot();
    })
})