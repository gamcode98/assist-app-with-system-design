import * as yup from 'yup'

export const subjectValidationSchena = yup.object().shape({
  name: yup
    .string()
    .required('El nombre de la materia es obligatorio'),
  universityCareer: yup
    .string()
    .required('El nombre de la carrera universitaria es obligatoria')
  // days: yup
  //   .array().of(yup.string())
  //   .required('El día es obligatorio')

})
