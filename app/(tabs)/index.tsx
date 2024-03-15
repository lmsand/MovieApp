import { StyleSheet, FlatList, Text, ActivityIndicator } from "react-native";
import { View } from "@/components/Themed";
import { fetchTopRatedMovies } from "@/api/movies";
import { useInfiniteQuery } from "@tanstack/react-query";
import MovieListItem from "@/components/MovieListItem";

export default function TabOneScreen() {  // replaces commented code below
  const {
    data,
    isLoading,
    error,
    fetchNextPage
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: fetchTopRatedMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1
  });


  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     setIsLoading(true)

  //     try {

  //       const movies = await fetchTopRatedMovies();
  //       setMovies(movies);
  //     } catch(error) {
  //       setError(error)
  //     }

  //     setIsLoading(false)
  //   };
  //   fetchMovies();
  // }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const movies = data?.pages?.flat()

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        numColumns={2}
        contentContainerStyle={{gap: 5, padding: 5}}
        columnWrapperStyle={{ gap: 5}}
        renderItem={({ item }) => <MovieListItem movie={item} />}
        onEndReached={() => {
          fetchNextPage()
        }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
