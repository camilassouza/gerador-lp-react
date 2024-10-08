import { MenuLink } from '.';
export default {
    title: 'MenuLink',
    component: 'MenuLink',
    args: {
        children: 'MenuLink',
        link: 'www.google.com'
    },
    argTypes: {
    newtab: {type: 'boolean'},
    children: { type: 'string' },
    }
};
export const Template = (args) => {
    return (
        <MenuLink {...args} />
    );
};