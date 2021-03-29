import { NewComponentStyle } from '@catlord/styles';
import { Theme } from '@catlord/styles';
import { MenuBarDimensions } from '../menubar/menubar.styles';

export const Styles = NewComponentStyle({
    outerDiv: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: MenuBarDimensions.height,
        overflow: 'hidden',
    },
    container: {
        backgroundColor: Theme.background.hex(),
        width: '100%',
        height: '100%',
    }
});
