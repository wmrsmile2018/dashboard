import { Mode } from './constants/mode';
import { ColorsByMode, Colors } from './types';

const getColorsByMode = (mode: Mode): ColorsByMode => {
  return mode === 'dark'
    ? {
        bgLevel0: '#16181A',
        bgDisabledLevel0: '#86888A',
        bgDisabledLevel1: '#F7FBFF',
        bgLevel1: '#191C1E',
        bgLevel2: '#292D31',
        hover: '#3B4248',
        icons: '#CFD4D8',
        iconsInvert: '#3B4248',
        text: '#CFD4D8',
        textInvert: '#3B4248',
        textEmphasis: '#FFF',
      }
    : {
        bgLevel0: '#ECECEC',
        bgDisabledLevel0: '#D0D7DE',
        bgDisabledLevel1: '#F7FBFF',
        bgLevel1: '#F8F9FD',
        bgLevel2: '#D2D6E4',
        hover: '#FFDEC0',
        icons: '#343A46',
        iconsInvert: '#8C929E',
        text: '#343A46',
        textInvert: '#8C929E',
        textEmphasis: '#141517',
      };
};

export const colorsByMode = (mode: Mode): Colors => ({
  ...getColorsByMode(mode),
});
