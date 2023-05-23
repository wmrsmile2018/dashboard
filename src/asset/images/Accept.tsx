import { SVGProps } from 'react';

export const Accept = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      version='1.1'
      viewBox='0 0 29 29'
      xmlSpace='preserve'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='2'
        d='M22 9.827l-9.345 9.346L7 13.518'
      />
    </svg>
  );
};
