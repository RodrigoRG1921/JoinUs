import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import {
  Dialog,
  DialogHeader,
  DialogContent,
  Stack,
} from '@react-native-material/core'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

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
          <TouchableOpacity style={Styles.iconContainer}>
            <Icon name='facebook' size={27} color='#4267B2' />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.iconContainer}>
            <FontAwesomeIcon name='instagram' size={25} color={'#E1306C'} />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.iconContainer}>
            <Icon name='phone' size={25} color='#009688' />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.iconContainer}>
            <Icon name='web' size={25} color='#00a5ff' />
          </TouchableOpacity>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default ContactModal

const Styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 50, padding: 10, backgroundColor: '#F0F0F0', margin: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center', width: 50, height: 50
  }
})
