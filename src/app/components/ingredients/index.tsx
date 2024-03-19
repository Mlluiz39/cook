import { ScrollView, Alert, View } from 'react-native'

import { Ingredient } from '../ingredient'

import { styles } from './styles'
import { useState } from 'react'
import Selected from '../selected'

export function Ingredients() {
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected(prev => prev.filter(item => item !== value))
    }
    setSelected([...selected, value])
  }

  function handleClearSelected() {
    Alert.alert(
      'Limpar',
      'Deseja realmente limpar os ingredientes selecionados?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Limpar', onPress: () => setSelected([]) },
      ]
    )
  }

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {Array.from({ length: 18 }).map((_, index) => (
          <Ingredient
            key={index}
            name={'maça'}
            image={''}
            selected={selected.includes(String(index))}
            onPress={() => {
              handleToggleSelected(String(index))
            }}
          />
        ))}
      </ScrollView>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onSearch={() => {}}
          onClear={handleClearSelected}
        />
      )}
    </View>
  )
}
