import StyledContainer from '../ui/StyledContainer'
import StyledTextInput from '../ui/StyledTextInput'

const SubjectForm = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledTextInput placeholder='Nombre de la materia' />
      <StyledTextInput placeholder='Carrera universitaria' />
    </StyledContainer>
  )
}

export default SubjectForm
