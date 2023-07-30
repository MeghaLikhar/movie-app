// Replace this with the actual API endpoint
const API_URL = 'http://www.omdbapi.com/?apikey=788ed9ed';

export const fetchMovies = async () => {
  try {
    const response = await fetch(`${API_URL}&s=river&type=movie`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieById = async (id) => {
  try {
    const response = await fetch(`${API_URL}&i=${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
