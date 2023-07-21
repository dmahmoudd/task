const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('./src/app/tailwind/config');

module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, 'libs/storybook/**/!(*.stories|*.spec).{ts,html}'),
    './src/**/*.{html,ts}',
  ],
  options: {
    safelist: [
      'text-ta-info',
      'border-ta-success',
      'border-ta-error',
      'border-ta-warning',
      'border-ta-info',
      'block',
      'mat-warn',
    ],
  },
};

