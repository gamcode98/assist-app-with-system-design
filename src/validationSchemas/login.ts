import * as yup from 'yup'

export const loginValidationSchena = yup.object().shape({
  email: yup
    .string()
    .required('El correo electrónico es obligatorio')
    .email('Debe ser una dirección válida'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(5, 'Contraseña muy corta!')
    .max(20, 'Contraseña muy larga!')
})
