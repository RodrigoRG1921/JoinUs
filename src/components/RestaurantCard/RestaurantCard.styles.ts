import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,  
  },
  middleContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  imageContainer: {
    
  },
  informationContainer: {
    
  },
  textAddress: {
    textAlign: 'justify',
  },
  textRating: {
    marginVertical: 6,
    padding: 0,
    fontSize: 50
  },
  bottomContainer: {
    marginTop: 6,
    paddingBottom: 12,
    paddingLeft: 12,
  }
})

export {
  styles
}
