import { FlattenSimpleInterpolation } from 'styled-components';

export type ColorsByMode = {
  bgLevel0: string;
  bgDisabledLevel0: string;
  bgDisabledLevel1: string;
  bgLevel1: string;
  bgLevel2: string;
  hover: string;
  icons: string;
  iconsInvert: string;
  text: string;
  textInvert: string;
  textEmphasis: string;
};

export type Colors = ColorsByMode & {};

type Typography = {
  h1: FlattenSimpleInterpolation;
  h2: FlattenSimpleInterpolation;
  h3: FlattenSimpleInterpolation;
};

export interface IDefaultTheme {
  colors: Colors;
  mode: string;
  // typography: Typography;
  size?: Record<string, number>;
}
