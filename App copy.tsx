import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { FlatList, Modal, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native'
import SubjectForm from './src/components/Forms/SubjectForm'
import StyledContainer from './src/components/ui/StyledContainer'
import StyledModalBody from './src/components/ui/StyledModalBody'
import StyledPressable from './src/components/ui/StyledPressable'
import Login from './src/screens/Login'

export default function App (): JSX.Element {
  const [modalVisible, setModalVisible] = useState(true)
  const [hourPosition, setHourPosition] = useState('')
  const [minutePosition, setMinutePosition] = useState('')

  const minutes = Array.from({ length: 60 - 0 }, (f, g) => g + 0)
    .map(minute => minute.toString().padStart(2, '0'))

  const hours = Array.from({ length: 22 - 7 }, (f, g) => g + 7)
    .map(hour => hour.toString().padStart(2, '0'))

  const handleScrollToHours = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const ITEM_HEIGHT = 50
    const { y } = e.nativeEvent.contentOffset
    const index = Math.floor(y / ITEM_HEIGHT)

    console.log(hours[index])
    setHourPosition(hours[index])
  }

  const handleScrollToMinutes = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const ITEM_HEIGHT = 50
    const { y } = e.nativeEvent.contentOffset
    const index = Math.floor(y / ITEM_HEIGHT)

    console.log(minutes[index])
    setMinutePosition(minutes[index])
  }

  return (
  // <StyledContainer>
  //   <Modal
  //     animationType='slide'
  //     transparent
  //     visible={modalVisible}
  //     onRequestClose={() => {
  //       setModalVisible(!modalVisible)
  //     }}
  //   >
  //     <StyledModalBody>
  //       <View style={styles.timeView}>
  //         <View>
  //           <Text style={styles.timeHeadingText}>Horas</Text>
  //           <View style={styles.timeStyle}>
  //             <FlatList
  //               onScroll={(e) => handleScrollToHours(e)}
  //               data={hours}
  //               showsVerticalScrollIndicator={false}
  //               snapToAlignment='center'
  //               decelerationRate='fast'
  //               snapToInterval={50}
  //               keyExtractor={(item) => item}
  //               renderItem={({ item }) => (
  //                 <Text style={[styles.timeTextStyle]}>{item}</Text>
  //               )}
  //             />
  //           </View>
  //         </View>

  //         <Text style={styles.colon}> : </Text>

  //         <View>
  //           <Text style={styles.timeHeadingText}>Minutos</Text>
  //           <View style={styles.timeStyle}>
  //             <FlatList
  //               onScroll={(e) => handleScrollToMinutes(e)}
  //               data={minutes}
  //               showsVerticalScrollIndicator={false}
  //               snapToAlignment='center'
  //               decelerationRate='fast'
  //               snapToInterval={50}
  //               keyExtractor={(item) => item}
  //               renderItem={({ item }) => (
  //                 <Text style={[styles.timeTextStyle]}>{item}</Text>
  //               )}
  //             />
  //           </View>
  //         </View>
  //       </View>
  //       <StyledPressable
  //         onPress={() => setModalVisible(!modalVisible)}
  //         title='Cerrar modal'
  //       />
  //     </StyledModalBody>
  //   </Modal>
  //   <StyledPressable
  //     onPress={() => setModalVisible(true)}
  //     title='Abrir modal'
  //   />

  //   <StatusBar style='light' />
  // </StyledContainer>
    <SubjectForm />

  )
}

const styles = StyleSheet.create({
  timeView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 100
  },
  timeStyle: {
    height: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5
  },
  timeTextStyle: {
    height: 50,
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  colon: {
    fontSize: 32,
    fontWeight: '400'
  },
  timeHeadingText: {
    marginBottom: 5
  }
})
