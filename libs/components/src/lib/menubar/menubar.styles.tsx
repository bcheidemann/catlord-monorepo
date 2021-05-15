import { ComponentStyle } from '@catlord/styles';
import { Theme } from '@catlord/styles';

export const MenuBarDimensions = {
  height: 70,
  borderWidth: 3,
};

export const Styles = ComponentStyle({
  outerDiv: {
    height: MenuBarDimensions.height - MenuBarDimensions.borderWidth,
    backgroundColor: Theme.background.darken(0.2).hex(),
    borderWidth: MenuBarDimensions.borderWidth,
    borderColor: 'black',
    borderBottomStyle: 'solid',
    color: Theme.text.hex(),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  logo: {
    position: 'absolute',
    left: 0,
    padding: 8,
  },
  title: {
    left: 70,
    position: 'absolute',
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
    display: 'flex',
    height: 64,
    alignItems: 'center',
    top: 3,
    paddingLeft: 3,
    color: Theme.text.darken(0.95).hex(),
    filter: 'blur(2px)',
  },
  children: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
