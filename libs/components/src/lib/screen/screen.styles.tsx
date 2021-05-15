import { ComponentStyle } from '@catlord/styles';
import { Theme } from '@catlord/styles';

export const Styles = ComponentStyle({
    outerDiv: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: Theme.background.darken(0.9).hex(),
    },
    container: {
        backgroundColor: Theme.background.hex(),
        flex: 1,
        maxWidth: 'max(800px, 80%)',
    }
});
