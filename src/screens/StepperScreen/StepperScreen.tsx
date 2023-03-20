import React, { useState, useEffect } from 'react'
import {
  View
} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import StepIndicator from 'react-native-step-indicator-v2'

import { stepperStyles, styles } from './StepperScreen.styles'

import CategoryView from '../../containers/CategoryView'
import PreferencesView from '../../containers/PreferencesView'
import ResultsView from '../../containers/ResultsView'
import ButtonBase from '../../components/Button'

import { useCategoriesHook, usePreferencesHook, useResultsHook, useRestaurantsHook } from '../../hooks'

interface IProps {
  labels?: Array<string>
}

const defaultLabels = ['Categoría', 'Preferencias', 'Resultados']

const buttonTextMap = [
  'Siguiente',
  'Siguiente',
  'Finalizar',
]

const StepperScreen = ({
  labels = defaultLabels,
  ...props
}: IProps & any) => {
  const isFocused = useIsFocused()

  const [stepperPositionIndex, setStepperPositionIndex] = useState<number>(0)

  const { categories, selectedCategory, setSelectedCategory } = useCategoriesHook()
  const { preferences, preferencesSelected, preferencesSelectedMap, setPreferencesSelectedMap, setPreferencesSelected } = usePreferencesHook()
  const { restaurants } = useRestaurantsHook()
  const { results } = useResultsHook({
    category: selectedCategory, preferences: preferencesSelected, restaurants
  })

  useEffect(() => {
    console.log('aiudame', isFocused)
    setStepperPositionIndex(0)
  }, [isFocused])

  useEffect(() => {
    if (!stepperPositionIndex) {
      setPreferencesSelected([])
      setSelectedCategory('')
    }
  }, [stepperPositionIndex])

  const handleOnChipClick = (key: string) => {
    const chipsSelectedMapCopy = { ...preferencesSelectedMap }
    chipsSelectedMapCopy[key] = !chipsSelectedMapCopy[key]
    setPreferencesSelectedMap(chipsSelectedMapCopy)
  }

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category)
    setStepperPositionIndex(stepperPositionIndex+1)
  }

  const handleOnRestaurantClick = (restaurant: any) => {
    props.navigation.navigate('RestaurantDetailScreenStepper', { ...restaurant })
  }

  const renderViewByPositionIndex = (positionIndex: number) => {
    const views = [
      <CategoryView key='categoryView' categories={categories} handleCategoryCardOnPress={handleCategoryPress} />,
      <PreferencesView
        key='preferencesView'
        preferences={preferences}
        handleOnChipClick={handleOnChipClick}
        preferencesSelectedMap={preferencesSelectedMap}/>,
      <ResultsView onPress={handleOnRestaurantClick} key='resultView' results={results}/>
    ]
    return views[positionIndex]
  }

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicatorContainer}>
        <StepIndicator
          customStyles={stepperStyles}
          currentPosition={stepperPositionIndex}
          labels={labels}
          stepCount={labels.length} />
      </View>
      <View style={styles.stepContainer}>
        { renderViewByPositionIndex(stepperPositionIndex) }
      </View>
      <View style={styles.buttonsContainer}>
        <View>
          { stepperPositionIndex > 0 && (
            <ButtonBase
              titleStyle={{ color: '#B71C1C' }}
              title='Atrás'
              onPress={() => setStepperPositionIndex(stepperPositionIndex-1)}/>
          ) }
        </View>
        <View>
          { stepperPositionIndex !== 2 && (
            <ButtonBase
              style={{ borderColor: '#B71C1C' }}
              titleStyle={{ color: '#B71C1C' }}
              title={buttonTextMap[stepperPositionIndex]}
              onPress={() => setStepperPositionIndex(stepperPositionIndex+1)} />
          ) }
        </View>
      </View>
    </View>
  )
}

export default StepperScreen
