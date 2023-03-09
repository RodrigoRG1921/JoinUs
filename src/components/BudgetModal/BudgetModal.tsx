import React from 'react'
import {
  Dialog,
  DialogHeader,
  DialogContent,
  Text,
  Stack,
  Chip,
} from '@react-native-material/core'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface IProps {
  isOpen: boolean;
  handleDismiss: () => void;
  price: string
}

const BudgetModal = ({
  isOpen = false,
  handleDismiss,
  price
}: IProps) => {

  return (
    <Dialog visible={isOpen} onDismiss={handleDismiss} >
      <DialogHeader title={'Categoría de Precios'} />
      <DialogContent>
        <Stack spacing={16} style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: '#B71C1C', fontSize: 28 }} variant='subtitle1'>{price}</Text>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default BudgetModal
