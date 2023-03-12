import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import React, {useCallback, useState} from 'react'
import {View, Text} from 'react-native'
import DrawerFavorites from '../../components/Drawer/DrawerFavorites'
import {styles} from './CustomDrawer.styles'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const [favorites, setFavorites] = useState(false)
  const navigateToSearchScreen = useCallback(() => {
    props.navigation.navigate('SearchNavigator')
  }, [])
  const navigateToStepper = useCallback(() => {
    props.navigation.navigate('StepperNavigator')
  }, [])
  const handleFavoritesPress = () => {
    setFavorites(!favorites)
  }
  return (
    <DrawerContentScrollView
      contentContainerStyle={{flex: 1, paddingHorizontal: 8}}
      {...props}>
      {!favorites ? (
        <View style={{flex: 1}}>
          <View style={styles.titleBox}>
            <View style={styles.faceBorder}>
              <Text style={styles.face}>{':)'}</Text>
            </View>
            <Text style={styles.title}>Juan Perez</Text>
          </View>
          <View style={styles.drawerSections}>
            <View>
              <View style={styles.drawerSection}>
                <DrawerItem
                  label="Encontrar mi lugar"
                  style={styles.drawerItem}
                  labelStyle={styles.labelStyle}
                  onPress={navigateToStepper}
                />
                <DrawerItem
                  labelStyle={styles.labelStyle}
                  style={styles.drawerItem}
                  label="Busqueda"
                  onPress={navigateToSearchScreen}
                />
              </View>
              <View style={styles.drawerSection}>
                <DrawerItem
                  label="Favoritos"
                  style={styles.drawerItem}
                  labelStyle={styles.labelStyle}
                  onPress={handleFavoritesPress}
                />
              </View>
            </View>
            <View style={styles.drawerSection}>
              <View>
                <DrawerItem
                  label="Ajustes"
                  labelStyle={styles.labelStyle}
                  style={styles.drawerItem}
                  onPress={navigateToStepper}
                />
                <DrawerItem
                  label="Acerca de"
                  labelStyle={styles.labelStyle}
                  style={styles.drawerItem}
                  onPress={navigateToStepper}
                />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <DrawerFavorites onPress={handleFavoritesPress} {...props} />
      )}
    </DrawerContentScrollView>
  )
}

export default CustomDrawer
