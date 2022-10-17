import React from 'react'
import { Button, ButtonProps } from '@react-native-material/core'

const ButtonBase = ({
  ...props
}: ButtonProps) => (
  <Button {...props} variant='outlined'/>
)

export default ButtonBase
