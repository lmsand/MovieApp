
export const fetchTopRatedMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
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




  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((err) => console.error('error:' + err));

}
