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

export default theme
