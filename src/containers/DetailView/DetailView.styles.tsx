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
    alignItems: 'center'
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
    marginVertical: 22
  },
  button: {
    marginHorizontal: 12
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  }
})

export {
  styles
}
