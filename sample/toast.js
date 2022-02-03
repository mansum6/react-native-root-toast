import Toast from 'react-native-root-toast';
import { colors } from '../theme/colors';
let backgroundColor = colors.secondary;
let textColor = colors.textWhite;
export const toastIt = ({
  message,
  type = 'info',
  pressAction,
  timeout = 2000,
  onShow,
  onShown,
  onHide,
  onHidden,
}) => {
  switch (type) {
    case 'success':
      backgroundColor = colors.success;
      textColor = colors.textWhite;
      break;
    case 'error':
      backgroundColor = colors.danger;
      textColor = colors.textWhite;
      break;
    case 'warning':
      backgroundColor = colors.warning;
      textColor = colors.textBlack;
      break;
    case 'info':
      backgroundColor = colors.secondary;
      textColor = colors.textWhite;
      break;
    default:
      backgroundColor = colors.secondary;
      textColor = colors.textWhite;
      break;
  }

  Toast.show(message, {
    duration: timeout,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor,
    textColor,

    onPress: () => {
      typeof pressAction === 'function' && typeof onHide === 'function'
        ? pressAction()
        : null;
    },

    delay: 0,
    onShow: () => {
      typeof onShow === 'function' ? onShow() : null;
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      typeof onShown === 'function' ? onShown() : null;
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      typeof onHide === 'function' ? onHide() : null;
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      typeof onHidden === 'function' ? onHidden() : null;
      // calls on toast\`s hide animation end.
    },
  });
};
