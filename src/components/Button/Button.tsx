import React, { Component } from 'react';
import classes from './Button.module.scss';

interface IProps {
  content?: string;
  onClickFunc?: () => void;
  type?: string;
}
export class Button extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <button className={classes.button} onClick={this.props.onClickFunc}>
        {this.props.content}
      </button>
    );
  }
}
