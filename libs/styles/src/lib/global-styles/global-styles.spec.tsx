import React from 'react';
import { render } from '@testing-library/react';

import GlobalStyles from './global-styles';

describe('GlobalStyles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GlobalStyles><div /></GlobalStyles>);
    expect(baseElement).toBeTruthy();
  });
});
