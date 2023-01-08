/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../../theme'

type Align = 'center' | 'left' | 'right'
type FontWeight = '400' | '500' | '700' | 'normal' | 'bold' | '800'
type FontSize = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26
type Color = 'darkGray' | 'lightGray' | 'blue' | 'red'
type Spacing = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16

interface Props {
  align?: Align
  children?: string
  color?: Color
  fontSize?: FontSize
  fontWeight?: FontWeight
  subheading?: boolean
  m?: Spacing
  my?: Spacing
  mx?: Spacing
  mb?: Spacing
  mt?: Spacing
  ml?: Spacing
  mr?: Spacing
  p?: Spacing
  py?: Spacing
  px?: Spacing
  pb?: Spacing
  pt?: Spacing
  pl?: Spacing
  pr?: Spacing
  style?: any
  [key: string]: any
}
// Margins
const margins = Array.from({ length: 16 }, (_, i) => ({ margin: i }))
const marginsY = Array.from({ length: 16 }, (_, i) => ({ marginVertical: i }))
const marginsTop = Array.from({ length: 16 }, (_, i) => ({ marginTop: i }))
const marginsBottom = Array.from({ length: 16 }, (_, i) => ({ marginBottom: i }))
const marginsX = Array.from({ length: 16 }, (_, i) => ({ marginHorizontal: i }))
const marginsLeft = Array.from({ length: 16 }, (_, i) => ({ marginLeft: i }))
const marginsRight = Array.from({ length: 16 }, (_, i) => ({ marginRight: i }))
// Paddings
const paddings = Array.from({ length: 16 }, (_, i) => ({ padding: i }))
const paddingsY = Array.from({ length: 16 }, (_, i) => ({ paddingVertical: i }))
const paddingsTop = Array.from({ length: 16 }, (_, i) => ({ paddingTop: i }))
const paddingsBottom = Array.from({ length: 16 }, (_, i) => ({ paddingBottom: i }))
const paddingsX = Array.from({ length: 16 }, (_, i) => ({ paddingHorizontal: i }))
const paddingsLeft = Array.from({ length: 16 }, (_, i) => ({ paddingLeft: i }))
const paddingsRight = Array.from({ length: 16 }, (_, i) => ({ paddingRight: i }))
// Font size
const fontSizes = [10, 12, 14, 16, 18, 20].map(size => ({ fontSize: size }))
// Font weight
const fontWeights = ['400', '500', '600', '700', '800', 'normal', 'bold'].map(weight => ({ fontWeight: weight }))

const StyledText = (
  { m, my, mt, mb, mx, ml, mr, p, py, pt, pb, px, pl, pr, align, children, color, fontSize, fontWeight, subheading, style, ...restOfProps }: Props): JSX.Element => {
  const textStyles = [
    styles.text,
    margins[m as keyof typeof margins] || { margin: 0 },
    marginsY[my as keyof typeof marginsY] || { marginVertical: 0 },
    marginsTop[mt as keyof typeof marginsTop] || { marginTop: 0 },
    marginsBottom[mb as keyof typeof marginsBottom] || { marginBottom: 0 },
    marginsX[mx as keyof typeof marginsX] || { marginHorizontal: 0 },
    marginsLeft[mx as keyof typeof marginsLeft] || { marginLeft: 0 },
    marginsRight[mx as keyof typeof marginsRight] || { marginRight: 0 },
    paddings[p as keyof typeof margins] || { padding: 0 },
    paddingsY[py as keyof typeof paddingsY] || { paddingVertical: 0 },
    paddingsTop[pt as keyof typeof paddingsTop] || { paddingTop: 0 },
    paddingsBottom[pb as keyof typeof paddingsBottom] || { paddingBottom: 0 },
    paddingsX[px as keyof typeof paddingsX] || { paddingHorizontal: 0 },
    paddingsLeft[pl as keyof typeof paddingsLeft] || { paddingLeft: 0 },
    paddingsRight[pr as keyof typeof paddingsRight] || { paddingRight: 0 },
    styles[align as keyof typeof styles] || styles.left,
    subheading ? styles.subheading : fontSizes[1],
    fontSizes.find(item => item.fontSize === fontSize) ?? fontSizes[1],
    fontWeights.find(item => item.fontWeight === fontWeight) ?? fontWeights[0],
    styles[color as keyof typeof styles] || styles.defaultColor,
    style
  ]
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.darkGray,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main
  },
  // Color
  darkGray: { color: theme.colors.darkGray },
  lightray: { color: theme.colors.lightGray },
  red: { color: theme.colors.red },
  blue: { color: theme.colors.blue },
  white: { color: theme.colors.white },
  defaultColor: { color: theme.colors.darkGray },
  subheading: { fontSize: theme.fontSizes.subheading },
  // Align text
  center: { textAlign: 'center' },
  left: { textAlign: 'left' },
  right: { textAlign: 'right' }

})

export default StyledText
