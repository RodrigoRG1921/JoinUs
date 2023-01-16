import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
  titleBox: {margin: 20, display: 'flex', flexDirection: 'row'},
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
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
    paddingVertical: 0,
  },
})

export {styles}
