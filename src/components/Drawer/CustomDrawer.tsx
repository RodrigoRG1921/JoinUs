import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import React, {useCallback} from 'react'
import {View, Text} from 'react-native'
import {styles} from './CustomDrawer.styles'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const navigateToSearchScreen = useCallback(() => {
    props.navigation.navigate('SearchScreen')
  }, [])
  const navigateToStepper = useCallback(() => {
    props.navigation.navigate('StepperNavigator')
  }, [])

  return (
    <DrawerContentScrollView
      contentContainerStyle={{flex: 1, marginHorizontal: 8}}
      {...props}>
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
              labelStyle={styles.labelStyle}
              style={styles.drawerItem}
              label="Busqueda"
              onPress={navigateToSearchScreen}
            />
            <DrawerItem
              label="Encontrar mi lugar"
              style={styles.drawerItem}
              labelStyle={styles.labelStyle}
              onPress={navigateToStepper}
            />
          </View>
          <View style={styles.drawerSection}>
            <DrawerItem
              label="Favoritos*"
              style={styles.drawerItem}
              labelStyle={styles.labelStyle}
              onPress={navigateToStepper}
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
    </DrawerContentScrollView>
  )
}

export default CustomDrawer
