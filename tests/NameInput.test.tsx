import { render, screen, fireEvent } from '@testing-library/react';
import NameInput from '../src/components/Form/NameInput/NameInput';
import React from 'react';

describe('NameInput component', () => {
  it('should update the input value', () => {
    const refLink = React.createRef<HTMLInputElement>();
    render(<NameInput refLink={refLink} validStatus={true} />);
    const input = screen.getByTestId('form-text');

    fireEvent.change(input, { target: { value: 'Eugene' } });

    expect(refLink.current?.value).toEqual('Eugene');
  });
});
