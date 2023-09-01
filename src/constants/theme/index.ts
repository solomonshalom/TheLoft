import { useThemeUI, ThemeUIContextValue } from 'theme-ui'
import { Theme, ThemeUICSSObject, ColorModesScale } from '@theme-ui/css'
// primitives
import colors from './colors'
import space from './space'
import { borders, radii } from './borders'
import { fonts, fontSizes, fontWeights, lineHeights } from './typography'
import sizes from './sizes'
// variants
import styles from './styles'
import layout from './layout'
import text from './text'
import links from './links'
import buttons from './buttons'

export type NestedThemeUICSSObject = {
	[k: string]: ThemeUICSSObject
}

const makeTheme = <T extends Theme>(t: T) => t

const breakpoints = ['40em', '64em']

const initialColorMode = 'light'; // Set your initial color mode here

const theme = makeTheme({
  breakpoints,
  colors,
  space,
  borders,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes,
  styles,
  layout,
  text,
  links,
  buttons,
  initialColorMode, // Add this line to set the initial color mode
})

export type ExactTheme = typeof theme & {
	rawColors?: ColorModesScale
}

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
	theme: ExactTheme
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue

export default theme
