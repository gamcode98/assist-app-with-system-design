import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import StyledContainer from '../components/ui/StyledContainer'
import StyledPressable from '../components/ui/StyledPressable'
import StyledTextInput from '../components/ui/StyledTextInput'
import { loginValidationSchena } from '../validationSchemas/login'
import { yupResolver } from '@hookform/resolvers/yup'
import InputForm from '../components/Forms/InputForm'
import StyledText from '../components/ui/StyledText'
import FormControl from '../components/Forms/FormControl'

const Login = (): JSX.Element => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginValidationSchena)
  })
  const onSubmit = (data: any): void => console.log(data)
  // const [show, setShow] = useState(false)

  return (
    <StyledContainer>
      <Controller
        rules={{ required: true }}
        control={control}
        name='email'
        render={({ field }) =>
          <FormControl
            errors={errors}
            errorField='email'
            field={field}
            placeholder='Correo electrónico'
            keyboardType='email-address'
          />}
      />
      <Controller
        rules={{ required: true }}
        control={control}
        name='password'
        render={({ field }) =>
          <FormControl
            errors={errors}
            errorField='password'
            field={field}
            placeholder='Contraseña'
            secureTextEntry
          />}
      />
      <StyledPressable onPress={handleSubmit(onSubmit)} title='Ingresar' />
    </StyledContainer>
  )
}

export default Login
