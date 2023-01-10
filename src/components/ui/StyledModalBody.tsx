import { theme } from '../../theme'
import { StyleSheet, View } from 'react-native'

interface Props {children: JSX.Element | JSX.Element[] }

const StyledModalBody = ({ children }: Props): JSX.Element => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        {children}
      </View>
    </View>
  )
}

export default StyledModalBody

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.modal.backgroundColor,
    // borderRadius: 20,
    borderRadius: 5,
    padding: 35,
    // alignItems: 'center',
    shadowColor: theme.shadow.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // TODO: VER SI FUNCIONA BIEN CON LOS DEMAS
    width: '80%'
  }
})
