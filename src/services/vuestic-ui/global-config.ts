import VaIcon from './components/va-icon'
import iconsConfig from './icons-config/icons-config'
import { COLOR_THEMES } from './themes'

export default {
  colors: {
    presets: {
      original: {
        ...COLOR_THEMES[3].colors,
        gray: '#babfc2',
        dark: '#34495e',
        shadow: '#BF40BF',
        backgroundPrimary: '#050A10',
        backgroundSecondary: '#1F262F',
        backgroundElement: '#131A22',
        backgroundBorder: '#3D4C58',
        textPrimary: '#E6E6FA',
        textInverted: '#0B121A',
        focus: '#06d6a0',
      },
    },
  },
  icons: iconsConfig,
  breakpoint: {
    enabled: true,
    bodyClass: true,
    thresholds: {
      xs: 0,
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1440,
    },
  },
  components: {
    VaIcon,
    VaButton: {
      round: true,
    },
    presets: {
      VaButton: {
        outline: {
          backgroundOpacity: 0,
          hoverBehaviour: 'opacity',
          hoverOpacity: 0.07,
          pressedBehaviour: 'opacity',
          pressedOpacity: 0.13,
        },
        plain: {
          round: false,
          plain: true,
          hoverBehaviour: 'mask',
          hoverOpacity: 0.15,
          pressedBehaviour: 'mask',
          pressedOpacity: 0.13,
        },
      },
    },
  },
}
