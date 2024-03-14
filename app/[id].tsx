import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

const MovieDetails = () => {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>MovieDetails</Text>
    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({})
