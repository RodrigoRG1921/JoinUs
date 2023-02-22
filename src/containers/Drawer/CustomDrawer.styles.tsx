import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  titleBox: {padding: 20, backgroundColor: '#000000'},
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  labelStyle: {
    color: 'black',
    fontSize: 20,
  },
  drawerSection: {
    borderTopWidth: 1,
  },
  drawerSections: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  drawerItem: {
    display: 'flex',
    marginVertical: 0,
  },
  face: {
    margin: 0,
    paddingBottom: 3,
    padding: 0,
    transform: [{rotate: '90deg'}],
    width: 32,
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  },
  faceBorder: {
    borderWidth: 1,
    borderRadius: 50,
    width: 32,
    marginBottom: 12,
    borderColor: 'white',
  },
})

export {styles}
