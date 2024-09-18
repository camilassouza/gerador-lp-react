import { GridImage } from '.';
import mock from './mock';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'GridImage',
    component: 'GridImage',
    args: {
        title: '',
        image: {}
    },
    argTypes: {
    children: { type: 'string' },
    }
};
export const Template = (args) => {
    return (
        <GridImage {...args} />
    );
};