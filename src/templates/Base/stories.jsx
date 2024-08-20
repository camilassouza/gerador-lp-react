import { Base } from '.';
import mock from './mock';
import { GridText } from '../../components/GridText';
import GridMock from '../../components/GridText/mock'

export const mockBase = {
    children: (
        <>
            <GridText {...GridMock} />
            <GridText {...GridMock} background/>
            <GridText {...GridMock} />
            <GridText {...GridMock} background/>
            <GridText {...GridMock} />
            <GridText {...GridMock} background/>
            <GridText {...GridMock} />

        </>
    ),
    ...mock
}

export default {
    title: 'Templates/Base',
    component: 'Base',
    args: {
        mockBase
    },
    argTypes: {
    children: { type: 'string' },
    }
};
export const Template = (args) => {
    return (
        <Base {...args} />
    );
};