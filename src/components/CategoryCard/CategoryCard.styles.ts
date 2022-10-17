import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 160, width: '50%', borderRadius: 10, padding: 16, backgroundColor: 'transparent'
  },
  card: {
    height: '100%', borderRadius: 10, backgroundColor: 'transparent'
  },
  image: {
    width: '100%', height: '100%', borderRadius: 10, backgroundColor: 'transparent'
  },
  textContainer: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'
  },
  text: {
    color: 'white',
    fontWeight: '900'
  },
  surface: {
    borderRadius: 10
  }
})

export {
  styles
}
