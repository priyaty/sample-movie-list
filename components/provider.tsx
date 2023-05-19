import { createContext, useContext, useEffect, useReducer } from "react";
import { Movie, reducer } from "./reducer";
import { getMovies } from "@/pages/api/movies";

type MovieProviderProps = {
    children: React.ReactNode
}

export const MyContext = createContext<any | undefined>(undefined);

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        movies: [],
    });
    
    useEffect(() => {
        const fetchMovies = async () => {
            let results = await getMovies().then((res) => {
        
            let itemUpdated = res;

            return itemUpdated;
        });

        dispatch({
            type: "FETCH",
            payload: {
                data: results,
            },
        });
    };

    fetchMovies();
    }, []);

    return (
        <MyContext.Provider value={{state, dispatch}}>
        { children}
        </MyContext.Provider>
    )
}