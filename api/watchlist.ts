export const fetchWatchlistMovies = async () => {
  const url = 'https://api.themoviedb.org/3/account/15946757/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWQ2ODczYTY2YjkyMmE4YjAzYzgzNGJjODU1NGJmZiIsInN1YiI6IjYzNzZlZDRjMjU1ZGJhMDA3ZjkwNTkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rT4RGso23vCshFKDfwiN-UHcKu_AeIECKifK8Wz6NRg'
    }
  };

  const res = await fetch(url, options)

  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }

  const json = await res.json()

  return json.results
  }

export const addMovieToWatchlist = async (movieId: number) => {

  const url = 'https://api.themoviedb.org/3/account/15946757/watchlist';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWQ2ODczYTY2YjkyMmE4YjAzYzgzNGJjODU1NGJmZiIsInN1YiI6IjYzNzZlZDRjMjU1ZGJhMDA3ZjkwNTkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rT4RGso23vCshFKDfwiN-UHcKu_AeIECKifK8Wz6NRg'
    },
    body: JSON.stringify({media_type: 'movie', media_id: movieId, watchlist: true})
  };

  const res = await fetch(url, options)

  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }

  const json = await res.json()

  return json
}
