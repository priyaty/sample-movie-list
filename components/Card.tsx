import { useContext, useMemo } from "react";
import RatingBlock from "./RatingBlock";
import { MyContext } from "./provider";
import { Movie } from "./reducer";
import Link from "next/link";

const Card: React.FC<Movie> = ({ id, imageUrl, title, year, director, ratings }) => {
    const { state, dispatch } = useContext(MyContext);

    const handleRating = (value: number) => {        
        dispatch({
            type: "RATE",
            payload: {
                movieId: id,
                rating: value
            }
        })
    }

    const handleDelete = (e: any) => {
        e.stopPropagation();
        e.preventDefault();

        dispatch({type: "DELETE", payload: {
            movieId: id
        }})
    }

    const finalRating = useMemo(() => {
        let rating = ratings.reduce((total, cur) => total + cur);
        return (rating/ratings.length).toFixed(1);
    }, [state])

    return (
        <Link href={`movie/${id}`}>
            <div className="card">
                <span className="star-rating">{finalRating}</span>
                <div className="image-wrapper">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className={"card-content"}>
                    <h3 className="card-title">{title}</h3>
                    <h6 className="movie-year">{year}</h6>
                    <h4>Director/s</h4>
                    <ul className="directors-list">
                        {director.map((item, index) =>
                            <li key={"director-"+index}>{item}</li>
                            )}
                    </ul>
                    <br/>
                    <button className="delete-button" onClick={handleDelete}>Delete Movie</button>
                </div>
                <div className="card-footer">
                    <RatingBlock onRating={handleRating}/>
                </div>
            </div>
        </Link>
    );
}
 
export default Card;