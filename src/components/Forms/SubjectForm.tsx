import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Modal, Pressable, Text, Touchable, TouchableOpacity, View } from 'react-native'
import StyledContainer from '../ui/StyledContainer'
import StyledModalBody from '../ui/StyledModalBody'
import StyledPressable from '../ui/StyledPressable'
import StyledText from '../ui/StyledText'
import StyledTextInput from '../ui/StyledTextInput'
import StyledTouchableOpacity from '../ui/StyledTouchableOpacity'
import FormControl from './FormControl'
import { AntDesign } from '@expo/vector-icons'

const SubjectForm = (): React.ReactNode  => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [showDropdownToSelectDay, setShowDropdownToSelectDay] = useState<boolean>(false)
  const [day, setDay] = useState('Seleccione un día')

  const days = [
    { label: 'Lunes', value: 1 },
    { label: 'Martes', value: 2 },
    { label: 'Miércoles', value: 3 },
    { label: 'Jueves', value: 4 },
    { label: 'Viernes', value: 5 },
    { label: 'Sabado', value: 6 },
    { label: 'Domingo', value: 7 }
  ]

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      universityCareer: ''
    }
    // resolver: yupResolver(loginValidationSchena)
  })

  const handleDay = (day) => {
    console.log(day)
  }

  const onSubmit = (data: any): void => console.log(data)

  return (
    <StyledContainer>
      <Controller
        rules={{ required: true }}
        control={control}
        name='name'
        render={({ field }) =>
          <FormControl
            errors={errors}
            errorField='name'
            field={field}
            placeholder='Nombre de la materia'
          />}
      />

      <Controller
        rules={{ required: true }}
        control={control}
        name='universityCareer'
        render={({ field }) =>
          <FormControl
            errors={errors}
            errorField='universityCareer'
            field={field}
            placeholder='Carrera universitaria'
          />}
      />

      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <StyledModalBody>
          {days.map(day => (
            <TouchableOpacity
              key={day.value}
              onPress={() => setModalVisible(!modalVisible)}
              style={{ margin: 10 }}
            >
              <StyledText fontSize={16}>
                {day.label}
              </StyledText>
            </TouchableOpacity>
          ))}
        </StyledModalBody>
      </Modal>

      <StyledPressable
        onPress={() => setModalVisible(true)}
        title='Seleccionar día'
      />

      <StyledTouchableOpacity
        pl={20} pr={20} pt={14} pb={14}
        borderColor='blue'
        borderRadius={5}
        w={80}
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        onPress={() => setShowDropdownToSelectDay(!showDropdownToSelectDay)}
      >
        <StyledText fontSize={14}>{day}</StyledText>
        <AntDesign name='down' size={24} color='black' />
      </StyledTouchableOpacity>

      {showDropdownToSelectDay ? <StyledText>Me muestro</StyledText> : null }
      
      {/* {showDropdownToSelectDay &&       
        <View style={{ width: '80%', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
          {days.map(day => (
            <TouchableOpacity
              // pl={20} pr={20} pt={14} pb={14}
              key={day.value}
              onPress={() => handleDay(day)}
            >
              <StyledText fontSize={14}>{day.label}</StyledText>
            </TouchableOpacity>
          ))}
        </View>      
      } */}

    </StyledContainer>
  )
}

export default SubjectForm
