import React, { useState } from 'react'
import { View } from 'react-native'
import StepIndicator from 'react-native-step-indicator-v2'

import { stepperStyles, styles } from './StepperScreen.styles'

import CategoryView from '../../containers/CategoryView'
import ButtonBase from '../../components/Button'

import { useCategoriesHook } from '../../hooks'

interface IProps {
  labels?: Array<string>
}

const defaultLabels = ['Categoría', 'Preferencias', 'Resultados']

const StepperScreen = ({
  labels = defaultLabels
}: IProps) => {
  const [stepperPositionIndex, setStepperPositionIndex] = useState<number>(0)
  const { categories } = useCategoriesHook()

  const renderViewByPositionIndex = (positionIndex: number) => {
    if (positionIndex === 0) {
      return <CategoryView categories={categories} />
    }
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
              title='Atrás'
              onPress={() => setStepperPositionIndex(stepperPositionIndex-1)}/>
          ) }
        </View>
        <View>
          <ButtonBase
            title={stepperPositionIndex === 3 ? 'Finalizar' : 'Siguiente'}
            onPress={() => setStepperPositionIndex(stepperPositionIndex+1)} />
        </View>
      </View>
    </View>
  )
}

export default StepperScreen