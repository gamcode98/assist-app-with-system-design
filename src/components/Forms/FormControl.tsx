import { View } from 'react-native'
import StyledText from '../ui/StyledText'
import StyledTextInput from '../ui/StyledTextInput'

interface Props {
  field: any
  errors: any
  errorField: string
  [key: string]: any
}

const FormControl = ({ field, errors, errorField, ...props }: Props): JSX.Element => {
  const { onBlur, onChange, value } = field

  return (
    <View style={{ width: '80%', marginBottom: 20 }}>
      <StyledTextInput
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        {...props}
      />
      {errors[errorField] !== undefined &&
        <StyledText color='red' mt={6}>
          {errors[errorField]?.message}
        </StyledText>}
    </View>
  )
}

export default FormControl
