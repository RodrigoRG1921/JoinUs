import React from 'react'
import { View } from 'react-native'
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
}

const ContactModal = ({
  isOpen = false,
  handleDismiss,
}: IProps) => {

  return (
    <Dialog visible={isOpen} onDismiss={handleDismiss}>
      <DialogHeader title={'Contacto'} />
      <DialogContent>
        <Stack spacing={16} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Chip label={<Icon name='facebook' size={25} />} />
          <Chip style={{ backgroundColor: 'red' }} label={<Icon name='instagram' size={25} />} />
          <Chip style={{ backgroundColor: 'red' }} label={<Icon name='phone' size={25} />} />
          <Chip style={{ backgroundColor: 'red' }} label={<Icon name='web' size={25} />} />
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default ContactModal
