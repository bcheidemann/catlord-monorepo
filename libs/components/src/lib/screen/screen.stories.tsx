import React from 'react';
import { Screen, ScreenProps } from './screen';

export default {
  component: Screen,
  title: 'Screen',
};

export const primary = () => {
  const props: ScreenProps = {};

  return <Screen {...props}>Contents</Screen>;
};
