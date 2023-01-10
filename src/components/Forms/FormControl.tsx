import { StyleSheet, View } from 'react-native'
import { theme } from '../../theme'
import StyledText from '../ui/StyledText'
import StyledTextInput from '../ui/StyledTextInput'

interface Props {
  field: any
  errors: any
  errorField: string
  inputLeftElement?: () => JSX.Element
  inputRightElement?: () => JSX.Element
  [key: string]: any
}

const FormControl = ({ field, errors, errorField, inputLeftElement, inputRightElement, ...props }: Props): JSX.Element => {
  const { onBlur, onChange, value } = field

  const hasError = (): any => {
    if (errors[errorField] !== undefined) {
      return { borderColor: theme.colors.red }
    } else {
      return { borderColor: theme.colors.blue }
    }
  }

  return (
    <View style={styles.formControlContainer}>
      <View style={[styles.textInputContainer, hasError()]}>
        {inputLeftElement?.()}
        <StyledTextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          {...props}
        />
        {inputRightElement?.()}
      </View>
      {errors[errorField] !== undefined &&
        <StyledText color='red' mt={6}>
          {errors[errorField]?.message}
        </StyledText>}
    </View>
  )
}

const styles = StyleSheet.create({
  formControlContainer: {
    width: '80%',
    marginBottom: 20
  },
  textInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5
  }
})

export default FormControl
