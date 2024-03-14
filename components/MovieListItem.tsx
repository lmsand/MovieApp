import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";

const MovieListItem = ({ movie }) => {
  return (
    <Link href={`${movie.id}`} asChild>
      <Pressable style={{ flex: 1 }}>
        <Image
          source={{
            uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
          }}
          style={{ width: "100%", aspectRatio: 3 / 5, borderRadius: 20 }}
        />
        {/* <Text>{movie.title}</Text> */}
      </Pressable>
    </Link>
  );
};

export default MovieListItem;

const styles = StyleSheet.create({});
