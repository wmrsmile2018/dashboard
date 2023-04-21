import { Mode } from './constants/mode';
import { colorsByMode } from './colorsByMode';
import { IDefaultTheme } from './types';

export const themeSettings = (mode: Mode): IDefaultTheme => {
  const colors = colorsByMode(mode);
  return {
    mode,
    colors,
    // typography: {
    //     h1: css`
    //         font-size: 40px;
    //     `,
    //     h2: css`
    //         font-size: 32px;
    //     `,
    //     h3: css`
    //       font-size: 20px;
    //     `
    // }
  };
};
