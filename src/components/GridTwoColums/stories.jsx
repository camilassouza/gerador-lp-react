import { GridTwoColum } from '.';

export default {
  title: 'GridTwoColum',
  component: GridTwoColum,
  args: {
    title: 'Grid two columns',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam culpa eveniet doloribus harum? Ipsam, a necessitatibus? Sequi sunt accusantium quod, animi iure a, aliquid dolor ea vel magni dolore?`,
    image: 'assets/images/javascript.svg',
    metadata: {}
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColum {...args} />
    </div>
  );
};