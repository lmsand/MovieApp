
const headers = {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWQ2ODczYTY2YjkyMmE4YjAzYzgzNGJjODU1NGJmZiIsInN1YiI6IjYzNzZlZDRjMjU1ZGJhMDA3ZjkwNTkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rT4RGso23vCshFKDfwiN-UHcKu_AeIECKifK8Wz6NRg'
}

export const fetchTopRatedMovies = async ({pageParam}) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageParam}`;
  const options = {
    method: 'GET',
    headers: headers
  };

    const res = await fetch(url, options)

    if (!res.ok) {
      throw new Error('Failed to fetch movies')
    }

    const json = await res.json()

    return json.results
  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((err) => console.error('error:' + err));

}

export const fetchMovie = async (id: number) => {

  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers
  };

  const res = await fetch(url, options)

  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }

  const json = await res.json()

  return json

}
