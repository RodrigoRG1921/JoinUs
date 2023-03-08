import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 11,
  },
  title: {
    flex: 8
  },
  imageContainer: {
    flex: 2
  },
  favContainer: {
    flex: 2
  },
  unknownButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 11
  },
  button: {
    marginHorizontal: 12
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  rateChipContainer: {
    borderColor: '#B71C1C',
    borderWidth: 1,
  }
})

export {
  styles
}
