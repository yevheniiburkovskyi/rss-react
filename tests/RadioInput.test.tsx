import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import RadioInput from '../src/components/Form/RadioInput/RadioInput';

describe('RadioInput component', () => {
  it('should have value', () => {
    const refLink = React.createRef<HTMLInputElement>();
    render(<RadioInput refLink={refLink} value="Male" />);
    const radio = screen.getByTestId('form-radio');

    fireEvent.click(radio);

    expect(refLink.current?.value).toEqual('Male');
  });
});
