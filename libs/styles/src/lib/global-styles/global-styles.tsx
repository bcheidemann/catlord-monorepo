import './global-styles.scss';
import '@south-paw/typeface-minecraft';
import React from 'react';

export interface GlobalStylesProps {
  children: React.ReactElement;
}

export function GlobalStyles(props: GlobalStylesProps) {
  return (
    props.children
  );
}

export default GlobalStyles;
