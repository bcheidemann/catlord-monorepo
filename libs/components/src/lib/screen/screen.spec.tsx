import React from 'react';
import { render } from '@testing-library/react';

import Screen from './screen';

describe('Screen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Screen />);
    expect(baseElement).toBeTruthy();
  });
});
