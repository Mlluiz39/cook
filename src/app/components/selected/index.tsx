import Animated, { SlideInDown, BounceOutDown } from 'react-native-reanimated'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '@/theme'
import { Button } from '../Button'

type Props = {
  quantity: number
  onSearch: () => void
  onClear: () => void
}

export default function Selected({ quantity, onSearch, onClear }: Props) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}> {quantity} ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          color={theme.colors.gray_400}
          onPress={onClear}
        />
      </View>
      <Button title="Buscar Receitas" onPress={onSearch} />
    </Animated.View>
  )
}
