import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  stepIndicatorContainer: {
    flexGrow: 0,
    paddingVertical: 16
  },
  stepContainer: {
    flexGrow: 1
  },
  buttonsContainer: {
    paddingVertical: 16,
    paddingBottom: 24,
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  }
})

const stepperStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#B71C1C',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#B71C1C',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#B71C1C',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#B71C1C',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#B71C1C',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#B71C1C',
  borderRadiusSize: 10,
}

export {
  styles,
  stepperStyles
}
