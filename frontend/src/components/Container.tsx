import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="mx-auto w-11/12 max-w-7xl 2xl:w-4/5">{children}</div>;
}

export default Container;
