/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Pressable, StyleSheet } from 'react-native'
import { Color, paddings, paddingsBottom, paddingsLeft, paddingsRight, paddingsTop, paddingsX, paddingsY, Spacing, theme } from '../../theme'

interface Props {
  p?: Spacing
  py?: Spacing
  px?: Spacing
  pb?: Spacing
  pt?: Spacing
  pl?: Spacing
  pr?: Spacing
  color?: Color
  children: JSX.Element
  style?: any
  [key: string]: any
}

const StyledIcon = ({ p, py, px, pb, pt, pl, pr, color, children, style, ...props }: Props): JSX.Element => {
  const pressableStyles = [
    paddings[p as keyof typeof paddings] || { padding: 0 },
    paddingsY[py as keyof typeof paddingsY] || { paddingVertical: 0 },
    paddingsTop[pt as keyof typeof paddingsTop] || { paddingTop: 0 },
    paddingsBottom[pb as keyof typeof paddingsBottom] || { paddingBottom: 0 },
    paddingsX[px as keyof typeof paddingsX] || { paddingHorizontal: 0 },
    paddingsLeft[pl as keyof typeof paddingsLeft] || { paddingLeft: 0 },
    paddingsRight[pr as keyof typeof paddingsRight] || { paddingRight: 0 },
    styles[color as keyof typeof styles] || styles.defaultColor,
    style
  ]

  return (
    <Pressable style={pressableStyles} {...props}>
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  // Color
  darkGray: { color: theme.colors.darkGray },
  lightray: { color: theme.colors.lightGray },
  red: { color: theme.colors.red },
  blue: { color: theme.colors.blue },
  white: { color: theme.colors.white },
  defaultColor: { color: theme.colors.darkGray }
})

export default StyledIcon
