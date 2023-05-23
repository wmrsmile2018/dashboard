import { SVGProps } from 'react';

export const Share = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' {...props}>
      <path
        d='M25 20a5 5 0 00-3.91 1.93l-9.28-4.64A5 5 0 0012 16a5 5 0 00-.19-1.29l9.28-4.64A5 5 0 0025 12a5 5 0 10-5-5 5 5 0 00.19 1.29l-9.28 4.64A5 5 0 007 11a5 5 0 000 10 5 5 0 003.91-1.93l9.28 4.64A5 5 0 1025 20zm0-16a3 3 0 11-3 3 3 3 0 013-3zM7 19a3 3 0 113-3 3 3 0 01-3 3zm18 9a3 3 0 113-3 3 3 0 01-3 3z'
        fill='currentColor'
      />
    </svg>
  );
};
