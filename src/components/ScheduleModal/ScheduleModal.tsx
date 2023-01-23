import React, { useCallback } from 'react'
import { View } from 'react-native'
import {
  Dialog,
  DialogHeader,
  DialogContent,
  Text,
  Stack,
} from '@react-native-material/core'

interface IProps {
  isOpen: boolean;
  schedule: string[];
  handleDismiss: () => void;
}

const ScheduleModal = ({
  isOpen = false,
  schedule = [],
  handleDismiss,
}: IProps) => {

  const RenderSchedule = useCallback(() => schedule.map((s) => {
    const [day, _schedule] = s.split(/ (.*)/s)
    return (
      <View key={day} style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <View style={{ alignItems: 'flex-start', flex: 1 }}>
          <Text>{day}</Text>
        </View>
        <View style={{ alignItems: 'flex-end', flex: 1 }}>
          <Text>{_schedule}</Text>
        </View>
      </View>
    )
  }), [schedule])

  return (
    <Dialog visible={isOpen} onDismiss={handleDismiss}>
      <DialogHeader title={'Horarios'} />
      <DialogContent>
        <Stack style={{ width: '100%'}} spacing={16}>
          { RenderSchedule() }
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default ScheduleModal
