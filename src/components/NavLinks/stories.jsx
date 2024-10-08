import { NavLinks } from '.';
import links from './mock.js';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'NavLinks',
    component: 'NavLinks',
    args: {
        links: links
    },
    argTypes: {
        links: {type: ''}
    }
};
export const Template = (args) => {
    return (
        <NavLinks {...args} />
    );
};

