import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import CheckBoxInput from '../src/components/Form/CheckBoxInput/CheckBoxInput';

describe('CheckBox component', () => {
  it('should be checked', () => {
    const refLink = React.createRef<HTMLInputElement>();
    render(<CheckBoxInput refLink={refLink} validStatus={true} />);
    const checkbox = screen.getByTestId('form-terms');

    fireEvent.click(checkbox);

    expect(refLink.current?.checked).toEqual(true);
  });
  it('Should change color ', () => {
    const refLink = React.createRef<HTMLInputElement>();
    render(<CheckBoxInput refLink={refLink} validStatus={false} />);
    const error = screen.getByTestId('form-terms-invalid');
    expect(error.classList.length > 0).toEqual(true);
  });
});
