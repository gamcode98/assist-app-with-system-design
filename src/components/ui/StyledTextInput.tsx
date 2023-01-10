import { StyleSheet, TextInput } from 'react-native'
import { theme } from '../../theme'

interface Props {
  style?: {}
  error?: boolean
  placeholder?: string
  [key: string]: any

}

const StyledTextInput = ({ style = {}, error, placeholder, ...props }: Props): JSX.Element => {
  const inputStyle = [
    styles.textInput,
    style,
    (error ?? false) && styles.error
  ]

  return (
    <TextInput
      style={inputStyle}
      placeholder={placeholder}
      {...props}
    />
  )
}
const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 2
  },
  error: {
    borderColor: theme.colors.red
  }
})

export default StyledTextInput
