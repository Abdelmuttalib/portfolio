import { ChevronRightIcon } from '@heroicons/react/20/solid';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import { ButtonLink } from '@/components/links';
import { UnstyledLinkProps } from '@/components/links/UnstyledLink';

type ArrowLinkProps<C extends React.ElementType> = {
  as?: C;
  direction?: 'left' | 'right';
} & UnstyledLinkProps &
  React.ComponentProps<C>;

export default function ArrowLink<C extends React.ElementType>({
  children,
  className,
  direction = 'right',
  as,
  ...rest
}: ArrowLinkProps<C>) {
  const Component = as || ButtonLink;

  return (
    <Component
      {...rest}
      className={clsxm(
        'group gap-[0.25em]',
        direction === 'left' && 'flex-row-reverse',
        className
      )}
    >
      <span>{children}</span>

      <ChevronRightIcon
        className={clsxm(
          'relative',
          'w-6',
          'transition-transform duration-200',
          direction === 'right'
            ? 'motion-safe:-translate-x-1'
            : 'translate-x-1 rotate-180',
          'group-hover:translate-x-0'
        )}
      />
    </Component>
  );
}
