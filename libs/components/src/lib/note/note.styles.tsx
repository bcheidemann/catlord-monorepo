import { ComponentStyle } from '@catlord/styles';
import { Theme } from '@catlord/styles';

export const Styles = ComponentStyle({
  outerDiv: {
    backgroundColor: Theme.alert.hex(),
    padding: 10,
    width: 400,
    maxWidth: '80%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    borderRadius: 5,
    textAlign: 'left',
  }
});
