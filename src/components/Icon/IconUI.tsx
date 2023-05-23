import { FC } from 'react';
import { ComponentBaseProps } from '../../common/types/ComponentBaseProps';
import { IconMap, IconName } from '../../asset/constants/Icon';

export type IconUIProps = {
  iconName: IconName;
  color?: string;
  onClick?: VoidFunction;
};

export const IconUI: FC<ComponentBaseProps & IconUIProps> = ({
  iconName,
  className,
  color,
  onClick,
}) => {
  const IconComponent = IconMap[iconName];

  return (
    <IconComponent onClick={onClick} className={className} color={color} />
  );
};
