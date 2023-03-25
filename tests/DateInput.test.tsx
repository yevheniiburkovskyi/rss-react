import { render, screen, fireEvent } from '@testing-library/react';
import DateInput from '../src/components/Form/DateInput/DateInput';
import React from 'react';

describe('DateInput component', () => {
  it('should update the input value', () => {
    const refLink = React.createRef<HTMLInputElement>();
    render(<DateInput refLink={refLink} validStatus={true} />);
    const input = screen.getByTestId('form-date');

    fireEvent.change(input, { target: { value: '2020-05-24' } });

    expect(refLink.current?.value).toEqual('2020-05-24');
  });
});
