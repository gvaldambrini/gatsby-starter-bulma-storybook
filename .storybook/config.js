import { configure } from '@storybook/react';

// Include any global CSS / SASS (not CSS Modules)
import '../src/layouts/index.scss';

// Stories loader
const req = require.context('../src', true, /.stories.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(req);
}

// Initialize react-storybook
configure(loadStories, module);
