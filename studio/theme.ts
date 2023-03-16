import { buildLegacyTheme } from 'sanity';

const props = {
  '--primary': '#6919FF',
  '--neutrals-900': '#060918',
  '--neutrals-800': '#161A2C',
  '--neutrals-700': '#23263B',
  '--neutrals-600': '#2E364F',
  '--neutrals-500': '#4D5775',
  '--neutrals-400': '#6F7A9B',
  '--neutrals-300': '#96A1C0',
  '--neutrals-200': '#C7D0E5',
  '--neutrals-100': '#F0F2FE',
  '--neutrals-50': '#FFFEF9',
  '--success': '#00F090',
  '--warning': '#FFDC30',
  '--error': '#FF2E5B',
};

export const myTheme = buildLegacyTheme({
  '--black': props['--neutrals-900'],
  '--white': props['--neutrals-50'],

  '--gray': props['--neutrals-600'],
  '--gray-base': props['--neutrals-400'],

  '--component-bg': props['--neutrals-900'],
  '--component-text-color': props['--neutrals-200'],

  '--brand-primary': props['--primary'],

  '--default-button-color': props['--neutrals-400'],
  '--default-button-primary-color': props['--primary'],
  '--default-button-success-color': props['--success'],
  '--default-button-warning-color': props['--warning'],
  '--default-button-danger-color': props['--error'],

  '--state-info-color': props['--primary'],
  '--state-success-color': props['--success'],
  '--state-warning-color': props['--warning'],
  '--state-danger-color': props['--error'],

  '--main-navigation-color': props['--neutrals-900'],
  '--main-navigation-color--inverted': props['--neutrals-200'],

  '--focus-color': props['--primary'],
});
