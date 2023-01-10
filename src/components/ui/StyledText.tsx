/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {
  Align, FontWeight, FontSize, Color, Spacing, theme,
  margins, marginsY, marginsTop, marginsBottom, marginsX, marginsLeft, marginsRight,
  paddings, paddingsY, paddingsTop, paddingsBottom, paddingsX, paddingsLeft, paddingsRight, fontSizes, fontWeights
} from '../../theme'

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

const StyledText = (
  { m, my, mt, mb, mx, ml, mr, p, py, pt, pb, px, pl, pr, align, children, color, fontSize, fontWeight, subheading, style, ...restOfProps }: Props): React.ReactElement => {
  const textStyles = [
    styles.text,
    margins[m as keyof typeof margins] || { margin: 0 },
    marginsY[my as keyof typeof marginsY] || { marginVertical: 0 },
    marginsTop[mt as keyof typeof marginsTop] || { marginTop: 0 },
    marginsBottom[mb as keyof typeof marginsBottom] || { marginBottom: 0 },
    marginsX[mx as keyof typeof marginsX] || { marginHorizontal: 0 },
    marginsLeft[mx as keyof typeof marginsLeft] || { marginLeft: 0 },
    marginsRight[mx as keyof typeof marginsRight] || { marginRight: 0 },
    paddingsY[py as keyof typeof paddingsY] || { paddingVertical: 0 },
    paddingsTop[pt as keyof typeof paddingsTop] || { paddingTop: 0 },
    paddingsBottom[pb as keyof typeof paddingsBottom] || { paddingBottom: 0 },
    paddingsX[px as keyof typeof paddingsX] || { paddingHorizontal: 0 },
    paddingsLeft[pl as keyof typeof paddingsLeft] || { paddingLeft: 0 },
    paddingsRight[pr as keyof typeof paddingsRight] || { paddingRight: 0 },
    // paddings[p as keyof typeof paddings] || { padding: 0 },
    paddings.find(item => item.padding === p) ?? { padding: 0 },
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
