import { TextComponent } from '.';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'TextComponent',
    component: 'TextComponent',
    args: {
        children: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptates assumenda sint eligendi illo excepturi dignissimos 
        tenetur, dolores voluptas commodi beatae perferendis esse rem 
        ea quasi, quod ipsam dolorum, exercitationem quidem!
        `,
    },
    argTypes: {
    children: { type: 'string' },
    }
};
export const Template = (args) => {
    return (
        <TextComponent {...args} />
    );
};