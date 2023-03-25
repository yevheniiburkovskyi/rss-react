import React, { Component } from 'react';
import classes from '../Form.module.scss';

interface IOptions {
  title: string;
  type: string;
  inputSelector?: string;
  labelSelector?: string;
  refLink: React.RefObject<HTMLInputElement>;
  otherAttributes?: {
    value?: string | number;
    name?: string;
    defaultChecked?: boolean;
    accept?: string;
  };
}

interface IProps {
  inputOptions: IOptions;
  defaultValue?: string;
  valid?: boolean;
}

export default class CustomInput extends Component<IProps> {
  options: IOptions;

  constructor(props: IProps) {
    super(props);
    this.options = this.props.inputOptions;
  }

  render() {
    return (
      <label className={this.options.labelSelector}>
        <p>{this.options.title}</p>
        <input
          type={this.options.type}
          ref={this.options.refLink}
          className={this.options.inputSelector}
          defaultValue={this.props.defaultValue}
          {...this.options.otherAttributes}
          data-testid={`form-${this.options.type}`}
        />
        <p className={classes.invalid}>
          {' '}
          {this.props.valid !== undefined &&
            (this.props.valid ? '' : `Invalid ${this.options.title}`)}
        </p>
      </label>
    );
  }
}
