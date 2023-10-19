import { buildLegacyTheme } from 'sanity';

const themeProps = {
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

const myTheme = buildLegacyTheme({
  '--black': themeProps['--neutrals-900'],
  '--white': themeProps['--neutrals-50'],
  '--gray': themeProps['--neutrals-600'],
  '--gray-base': themeProps['--neutrals-400'],
  '--component-bg': themeProps['--neutrals-900'],
  '--component-text-color': themeProps['--neutrals-200'],
  '--brand-primary': themeProps['--primary'],
  '--default-button-color': themeProps['--neutrals-400'],
  '--default-button-primary-color': themeProps['--primary'],
  '--default-button-success-color': themeProps['--success'],
  '--default-button-warning-color': themeProps['--warning'],
  '--default-button-danger-color': themeProps['--error'],
  '--state-info-color': themeProps['--primary'],
  '--state-success-color': themeProps['--success'],
  '--state-warning-color': themeProps['--warning'],
  '--state-danger-color': themeProps['--error'],
  '--main-navigation-color': themeProps['--neutrals-900'],
  '--main-navigation-color--inverted': themeProps['--neutrals-200'],
  '--focus-color': themeProps['--primary'],
});

export { myTheme, themeProps };
