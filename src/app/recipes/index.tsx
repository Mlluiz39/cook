import { View, Text, FlatList } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { theme } from '@/theme'
import { router } from 'expo-router'
import { Recipe } from '../components/Recipe'

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          color={theme.colors.gray_400}
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Ingredientes</Text>
        <FlatList
          data={['1']}
          keyExtractor={item => item}
          renderItem={() => (
            <Recipe
              recipe={{
                name: 'Omelete',
                image:
                  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
                minutes: 10,
              }}
            />
          )}
        />
      </View>
    </View>
  )
}
