import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import theme from '../../theme'

interface Props {
  title: string
  [key: string]: any
}

const StyledPressable = ({ title, ...props }: Props): JSX.Element => {
  return (
    <Pressable
      style={[styles.button, styles.buttonClose]}
      {...props}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  )
}

export default StyledPressable

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 15,
    elevation: 2,
    width: '80%'
  },
  buttonOpen: {
    backgroundColor: theme.button.backgroundColor
  },
  buttonClose: {
    backgroundColor: theme.button.backgroundColor
  },
  textStyle: {
    color: theme.button.color,
    fontWeight: 'normal',
    textAlign: 'center'
  }
})
