import React, { useState, useEffect, useCallback, } from 'react'
import {
  Dialog,
  DialogHeader,
  DialogContent,
  Stack,
} from '@react-native-material/core'

import { SelectedStarStyled, StarStyled } from './RateModal.styles'

interface IProps {
  isOpen: boolean;
  handleDismiss: () => void;
  rate: number | string;
}

const RateModal = ({
  isOpen = false,
  handleDismiss,
  rate,
}: IProps) => {
  const [rating, setRating] = useState<number>(0)

  useEffect(() => {
    const parsedRate = typeof rate === 'string' ? parseInt(rate) : rate
    setRating(parsedRate)
  }, [rate])

  const handleStarOnPress = useCallback((n: number) => {
    const newRate = rating - n
    setRating(newRate)
  }, [rating])

  const handleUnSelectedStarOnPress = useCallback((n: number) => {
    const newRate = (5 - rating) - n
    setRating(newRate)
  }, [rating])

  const RenderRating = useCallback(() => {
    const selectedStars = <>
      {[...Array(rating)].map((n) =>
        <SelectedStarStyled onPress={() => handleStarOnPress(n)} key={n} />)}
    </>

    const stars = <>
      {[...Array(5 - rating)].map((n) =>
        <StarStyled onPress={() =>  handleUnSelectedStarOnPress(n)} key={n} />)}
    </>

    return [selectedStars, stars]
  }, [rating])

  return (
    <Dialog visible={isOpen} onDismiss={handleDismiss}>
      <DialogHeader title={'Calificación'} />
      <DialogContent>
        <Stack spacing={16} style={{ flexDirection: 'row', justifyContent: 'center' }}>
          { RenderRating() }
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default RateModal
