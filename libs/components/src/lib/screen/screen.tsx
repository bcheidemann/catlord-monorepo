import React from 'react';

import './screen.scss';
import { Styles } from './screen.styles';

/* eslint-disable-next-line */
export interface ScreenProps {
  children?: React.ReactNode;
}

export function Screen(props: ScreenProps) {
  return (
    <div style={Styles.outerDiv}>
      {props.children}
    </div>
  );
}

export default Screen;
