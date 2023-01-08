import React from 'react'
import StyledTextInput from '../ui/StyledTextInput'

interface Props {
  field: any
  [key: string]: any
}

const InputForm = ({ field, ...props }: Props): JSX.Element => {
  const { onBlur, onChange, value } = field
  return (
    <StyledTextInput
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      {...props}
    />
  )
}

export default InputForm
