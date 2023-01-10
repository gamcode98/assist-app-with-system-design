import { useState } from 'react'
import { Dimensions, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CustomModalPicker = (): JSX.Element => {
  const [chooseData, setChooseData] = useState('Select something...')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const types = [
    { label: 'Lunes', value: 1 },
    { label: 'Martes', value: 2 },
    { label: 'Miércoles', value: 3 },
    { label: 'Jueves', value: 4 },
    { label: 'Viernes', value: 5 },
    { label: 'Sabado', value: 6 },
    { label: 'Domingo', value: 7 }
  ]

  const WIDTH = Dimensions.get('window').width

  const onPressItem = (value: any): void => {
    setIsModalVisible(false)
    setChooseData(value)
  }

  const type = types.map((type, index) => (
    <TouchableOpacity
      key={index}
      style={styles.type}
      onPress={() => onPressItem(type.value)}
    >
      <Text style={styles.textItem}>
        {type.label}
      </Text>
    </TouchableOpacity>
  ))

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <Modal
        transparent
        animationType='fade'
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}
        >
          <View style={[styles.modal, { width: WIDTH - 20 }]}>
            <ScrollView>
              {type}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  touchableOpacity: {
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    paddingHorizontal: 20
  },
  text: {
    marginVertical: 20,
    fontSize: 25
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10
  },
  type: {
    alignItems: 'flex-start'
  },
  textItem: {
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold'
  }
})

export default CustomModalPicker
