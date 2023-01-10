import { Platform } from 'react-native'

const theme = {
  appBar: {
    primary: '#24292e',
    textSecondary: '#999',
    textPrimary: '#fff'
  },
  colors: {
    darkGray: '#24292e',
    lightGray: '#586069',
    blue: '#0366d6',
    white: '#fefefe',
    red: '#b71c1c'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    mediumn: '500',
    bold: '700'
  },
  button: {
    color: '#fff',
    backgroundColor: '#2196F3'
  },
  shadow: {
    shadowColor: '#000'
  },
  modal: {
    backgroundColor: '#fff'
  }

}

type Align = 'center' | 'left' | 'right'
type FontWeight = '400' | '500' | '700' | 'normal' | 'bold' | '800'
type FontSize = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26
type Color = 'darkGray' | 'lightGray' | 'blue' | 'red'
type Spacing = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
type BorderRadius = 3 | 5 | 8 | 10 | 12 | 15 | 18 | 20
type Width = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

// Margins
const margins = Array.from({ length: 21 }, (_, i) => ({ margin: i }))
const marginsY = Array.from({ length: 21 }, (_, i) => ({ marginVertical: i }))
const marginsTop = Array.from({ length: 21 }, (_, i) => ({ marginTop: i }))
const marginsBottom = Array.from({ length: 21 }, (_, i) => ({ marginBottom: i }))
const marginsX = Array.from({ length: 21 }, (_, i) => ({ marginHorizontal: i }))
const marginsLeft = Array.from({ length: 21 }, (_, i) => ({ marginLeft: i }))
const marginsRight = Array.from({ length: 21 }, (_, i) => ({ marginRight: i }))
// Paddings
const paddings = Array.from({ length: 21 }, (_, i) => ({ padding: i }))
const paddingsY = Array.from({ length: 21 }, (_, i) => ({ paddingVertical: i }))
const paddingsTop = Array.from({ length: 21 }, (_, i) => ({ paddingTop: i }))
const paddingsBottom = Array.from({ length: 21 }, (_, i) => ({ paddingBottom: i }))
const paddingsX = Array.from({ length: 21 }, (_, i) => ({ paddingHorizontal: i }))
const paddingsLeft = Array.from({ length: 21 }, (_, i) => ({ paddingLeft: i }))
const paddingsRight = Array.from({ length: 21 }, (_, i) => ({ paddingRight: i }))
// Font size
const fontSizes = [10, 12, 14, 16, 18, 20].map(size => ({ fontSize: size }))
// Font weight
const fontWeights = ['400', '500', '600', '700', '800', 'normal', 'bold'].map(weight => ({ fontWeight: weight }))
// Border radius
const bordersRadius = [3, 5, 8, 10, 12, 15, 18, 20].map(br => ({ borderRadius: br }))
// Borders colors
const getBorderColors = (): any => {
  let borderColors = {}
  Object.entries(theme.colors).forEach(entry => {
    const [key, value] = entry
    borderColors = {
      ...borderColors,
      [key]: { borderColor: value, borderWidth: 1 }
    }
  })
  return borderColors
}
// Widths
const widths = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(w => ({ width: `${w}%` }))

export {
  theme,
  Align,
  FontWeight,
  FontSize,
  Color,
  Spacing,
  BorderRadius,
  Width,
  margins,
  marginsY,
  marginsTop,
  marginsBottom,
  marginsX,
  marginsLeft,
  marginsRight,
  paddings,
  paddingsY,
  paddingsTop,
  paddingsBottom,
  paddingsX,
  paddingsLeft,
  paddingsRight,
  fontSizes,
  fontWeights,
  bordersRadius,
  getBorderColors,
  widths
}
