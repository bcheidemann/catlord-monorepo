import { NewComponentStyle } from '@catlord/styles';
import { Theme } from '@catlord/styles';

export const MenuBarDimensions = {
  height: 70,
  borderWidth: 3,
};

export const Styles = NewComponentStyle({
  outerDiv: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: MenuBarDimensions.height - MenuBarDimensions.borderWidth,
    backgroundColor: Theme.background.darken(0.2).hex(),
    borderWidth: MenuBarDimensions.borderWidth,
    borderColor: 'black',
    borderBottomStyle: 'solid',
    color: Theme.text.hex(),
  },
  title: {
    left: 70,
    position: 'absolute',
    width: '100%',
    display: 'flex',
    height: 64,
    alignItems: 'center',
    top: 0,
    paddingLeft: 0,
    color: Theme.text.hex(),
  },
  titleShadow: {
    left: 70,
    position: 'absolute',
    width: '100%',
    display: 'flex',
    height: 64,
    alignItems: 'center',
    top: 5,
    paddingLeft: 5,
    color: Theme.textDark.hex(),
  },
});
