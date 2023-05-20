export interface Movie {
    id: string;
    title: string;
    year: number,
    director: string[],
    actors: string[];
    description: string;
    imageUrl: string,
    ratings: number[]
}

interface MoviesState {
    movies: Movie[];
  }

export const reducer = (state: MoviesState, action: any) => {
    switch (action.type) {
      case 'FETCH':

        let fetchedData = {
          movies: [...action.payload.data]
        };

        return {...fetchedData};

      case 'DELETE':
        let toDeleteItem = state.movies.findIndex(item => item.id === action.payload.movieId);

        let mockList = [...state.movies]

        mockList.splice(toDeleteItem, 1)
        
        let newList = {
          movies: mockList
        }
        
        return { ...newList };

        case 'RATE':
          console.log('rainte');
          
          let moviesList = [...state.movies];
          let movieToRate = moviesList.findIndex(item => item.id === action.payload.movieId)
          
          moviesList[movieToRate].ratings.push(action.payload.rating);

          const updatedList = {
            movies: moviesList
          }

        return { ...updatedList };

      default:
        return state
    }
  };