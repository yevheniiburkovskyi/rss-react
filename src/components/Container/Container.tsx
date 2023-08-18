import React, { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div className="container__container">{children}</div>;
}
