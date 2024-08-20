import { GridSection } from '.';
import mock from './mock';

export default {
    title: 'GridSection',
    component: 'GridSection',
    args: mock,
    argTypes: {
    children: { type: 'string' },
    }
};
export const Template = (args) => {
    return (
        <GridSection {...args} />
    );
};