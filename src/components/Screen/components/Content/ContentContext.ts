import { Dispatch, SetStateAction, createContext } from 'react';

export const ContentContext = createContext<{
  setTitle?: Dispatch<SetStateAction<string>>;
}>({
  setTitle: () => {},
});
