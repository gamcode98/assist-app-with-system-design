import { StyleSheet, View } from 'react-native'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const StyledContainer = ({ children }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default StyledContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#2e3338',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
