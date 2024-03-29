import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './SplashScreen.styles'

import { RootStackParamList } from '../../navigator'

type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>

interface IProps extends Props {
  timeoutTime?: number;
}

const SplashScreen = ({
  timeoutTime = 2000,
  navigation
}: IProps) => {
  useEffect(() => {
    const timeoutReference = setTimeout(() => {
      navigation.replace('DrawerNavigator')
    }, timeoutTime)

    return () => clearTimeout(timeoutReference)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image style={{ height: 450, width: 450 }} source={require('../../assets/images/splashscreen.jpg')}/>
    </SafeAreaView>
  )
}

export default SplashScreen
