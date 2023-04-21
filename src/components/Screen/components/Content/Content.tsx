import React, { FC } from 'react';
import { Styled } from './styles';
import { Parent } from 'common/types/parent';

export const Content: FC<Parent> = ({ children }) => {
  return (
    <Styled.Content>
      <Styled.AdaptedContent>{children}</Styled.AdaptedContent>
    </Styled.Content>
  );
};
