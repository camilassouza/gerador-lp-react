import { GridSection } from '.';
// import mock from './mock';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'GridSection',
    component: 'GridSection',
    args: {
        title: 'Grid two columns',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam culpa eveniet doloribus harum? Ipsam, a necessitatibus? Sequi sunt accusantium quod, animi iure a, aliquid dolor ea vel magni dolore?`,
        image: 'assets/images/javascript.svg',
        metadata: {},
        text_grid: {}
    },
    argTypes: {
        children: { type: 'string' },
    }
};
export const Template = (args) => {
    return (
        <GridSection {...args} />
    );
};