import { Mode } from '../constants/mode';
import { useMemo, useState } from 'react';
import { themeSettings } from '../themeSettings';
import { IDefaultTheme } from '../types';

export const useMode = (): {
  theme: IDefaultTheme;
  colorMode: { toggleColorMode: () => void };
} => {
  const [mode, setMode] = useState<Mode>(Mode.dark);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === Mode.light ? Mode.dark : Mode.light)),
    }),
    []
  );

  const theme = useMemo(() => themeSettings(mode), [mode]);

  return { theme, colorMode };
};
