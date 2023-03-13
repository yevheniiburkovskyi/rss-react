import React, { Component, ReactNode } from 'react';

export default class Container extends Component<
  { children: ReactNode } | Readonly<{ children: ReactNode }>
> {
  constructor(props: { children: ReactNode } | Readonly<{ children: ReactNode }>) {
    super(props);
  }
  render() {
    return <div className="container__container">{this.props.children}</div>;
  }
}
