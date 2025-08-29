const API_KEY = "c69a0273";
const URL = "https://www.omdbapi.com/";


export const searchMovies = async (Searchword, page = 1) => {
  try {
   const response = await fetch(
     `${URL}?apikey=${API_KEY}&s=${Searchword}&page=${page}`
   );
    const data = await response.json();

    if (data.Response == "True") {
      return data;
    } else {
      throw new Error(data.Error || "Wrong");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMovieDetails = async (movieID) => {
  try {
    const response = await fetch(
      `${URL}?apikey=${API_KEY}&i=${movieID}&plot=full`
    );
    const data = await response.json();
    if (data.Response == "True") {
      return data;
    } else {
      throw new Error(data.Error || "Could not find movie details");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPopularMovies = async () => {
  const popularSearchTerms = [
    "avengers",
    "batman",
    "spider",
    "star wars",
    "marvel",
  ];
  const randomTerm =
    popularSearchTerms[Math.floor(Math.random() * popularSearchTerms.length)];

  try {
    const data = await searchMovies(randomTerm);
    return data.Search || [];
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};