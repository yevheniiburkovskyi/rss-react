import { render, screen, fireEvent } from '@testing-library/react';
import SelectInput from '../src/components/Form/SelectInput/SelectInput';
import React from 'react';

describe('SelectInput component', () => {
  it('should update the input value', () => {
    const refLink = React.createRef<HTMLSelectElement>();
    render(<SelectInput refLink={refLink} validStatus={true} />);
    const input = screen.getByTestId('form-select');

    fireEvent.change(input, { target: { value: 'Ukraine' } });

    expect(refLink.current?.value).toEqual('Ukraine');
  });
  it('Should show error message', () => {
    const refLink = React.createRef<HTMLSelectElement>();
    render(<SelectInput refLink={refLink} validStatus={false} />);
    const error = screen.getByTestId('form-select-invalid');

    expect(error.textContent).toEqual('Invalid Country');
  });
});
