import { ScrollView } from 'react-native'

import { Ingredient } from '../ingredient'

import { styles } from './styles'
import { useState } from 'react'

export function Ingredients() {
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected(prev => prev.filter(item => item !== value))
    }
    setSelected([...selected, value])
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 50 }).map((_, index) => (
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
  )
}
