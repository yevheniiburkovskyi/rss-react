import { render, screen, fireEvent } from '@testing-library/react';
import FileInput from '../src/components/Form/FileInput/FileInput';
import React from 'react';

describe('FileInput component', () => {
  it('should update the input file', () => {
    const refLink = React.createRef<HTMLInputElement>();
    render(<FileInput refLink={refLink} validStatus={true} />);
    const input = screen.getByTestId('form-file');

    fireEvent.change(input, {
      target: { files: [new File(['(⌐□_□)'], 'mockFile.png', { type: 'image/png' })] },
    });
    if (refLink.current?.files) {
      expect(refLink.current?.files[0].name).toEqual('mockFile.png');
    }
  });
});
