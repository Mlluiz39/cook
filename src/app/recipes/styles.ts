import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 22,
    paddingTop: 62,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.family.bold,
  }
})
