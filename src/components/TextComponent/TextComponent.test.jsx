import { expect } from '@storybook/test';
import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme'
describe('<TextComponent />', () => {
    it('shold render a text', () => {
        renderTheme(<TextComponent>Children</TextComponent>);
        expect(screen.getByText('Children')).toBeInTheDocument();
    })

    it('shold render a text', () => {
       let container =  renderTheme(<TextComponent>Children</TextComponent>);
        expect(container.firstChild);
    })

})