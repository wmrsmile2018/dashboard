import { useContext } from 'react';
import { ContentContext } from '../ContentContext';
import { useState } from 'react';

export const useContextTitle = (title: string): void => {
  const ctx = useContext(ContentContext);

  ctx.setTitle?.(title);
};

export const useTitle = () => {
  const [title, setTitle] = useState<string | undefined>();

  return { title, setTitle };
};
