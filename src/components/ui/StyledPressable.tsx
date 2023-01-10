/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native'
import { theme } from '../../theme'

interface Props {
  title: string
  isLoading?: boolean
  disabled?: boolean
  [key: string]: any
}

const StyledPressable = ({ title, isLoading, disabled, ...props }: Props): JSX.Element => {
  return (
    <Pressable
      disabled={disabled}
      style={[styles.button, styles.buttonClose, styles.pressableContainer]}
      {...props}
    >
      {isLoading && <ActivityIndicator size='small' color={theme.colors.white} style={{ marginRight: 5 }} />}
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  )
}

export default StyledPressable

const styles = StyleSheet.create({
  pressableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
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
