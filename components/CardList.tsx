import { useContext } from "react";
import Card from "./Card";
import { Movie } from "./reducer";
import { MyContext } from "./provider";
 
const CardList = () => {
    const { state } = useContext(MyContext);

    return (
        <div>
            {state.movies.length > 0 && <ul className='card-list'>
            {state.movies.map((item: Movie, index: number) => {
              return <li key={item.id} className='card-item'>
              <Card {...item}/>
            </li>
            })}
          </ul>}
          {state.movies.length === 0 && <div>Loading...</div>}
        </div>
    );
}
 
export default CardList;