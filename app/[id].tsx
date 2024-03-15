import { ActivityIndicator, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useQuery, useMutation } from '@tanstack/react-query'
import { fetchMovie } from '@/api/movies'
import { Stack } from 'expo-router'
import { Feather } from '@expo/vector-icons';
import { addMovieToWatchlist } from '@/api/watchlist'

const MovieDetails = () => {
  const { id } = useLocalSearchParams()

  const { data: movie, isLoading, error } = useQuery({
    queryKey: ['movies', id],
    queryFn:() => fetchMovie(id)
  })

  const { mutate } = useMutation({
    mutationFn: () => addMovieToWatchlist(id)
  })

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>Failed to fetch data</Text>
  }

  return (
    <View>
      <Stack.Screen options={{ title: movie.title }} />
      <Image source={{
        uri: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
      }}
      style={{width: '100%', height: 300}}
       />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: '500', marginVertical: 10 }}>{movie.title}</Text>
        <View style={{marginVertical: 10}}>
          <Pressable onPress={() => mutate()} style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Feather name="bookmark" size={24} color="black" />
            <Text>Add to watchlist</Text>
          </Pressable>

        </View>
        <Text style={{ fontSize: 16 }}>{movie.overview}</Text>
      </View>
    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({})
