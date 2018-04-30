import initStoryshots from '@storybook/addon-storyshots';

// Avoid errors when using gatsby-link in a component.
global.___loader = {
  enqueue: jest.fn(),
};

initStoryshots();
