import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import StyledContainer from '../components/ui/StyledContainer'
import StyledPressable from '../components/ui/StyledPressable'
import { loginValidationSchena } from '../validationSchemas/login'
import { yupResolver } from '@hookform/resolvers/yup'
import FormControl from '../components/Forms/FormControl'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import StyledIcon from '../components/ui/StyledIcon'
import { theme } from '../theme'

const Login = (): JSX.Element => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginValidationSchena)
  })

  const onSubmit = (data: any): void => console.log(data)

  const [show, setShow] = useState(false)

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
            inputLeftElement={() =>
              <StyledIcon pl={18}>
                <FontAwesome
                  name='user'
                  size={24}
                  color={theme.colors.lightGray}
                />
              </StyledIcon>}
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
            inputRightElement={() =>
              <StyledIcon pr={18}>
                <Entypo
                  onPress={() => setShow(!show)}
                  name={show ? 'eye' : 'eye-with-line'}
                  size={24}
                  color={theme.colors.lightGray}
                />
              </StyledIcon>}
            placeholder='Contraseña'
            secureTextEntry={show}
          />}
      />

      <StyledPressable onPress={handleSubmit(onSubmit)} title='Ingresar' />
    </StyledContainer>
  )
}

export default Login
