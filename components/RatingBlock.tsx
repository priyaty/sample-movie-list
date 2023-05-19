import { useEffect, useState } from "react";

interface RatingBlockProps {
    onRating: (value: number) => void
}

const ratings: {
    [key: number]: string
} = {
    1: "Bad",
    2: "Nah",
    3: "Okay",
    4: "Good",
    5: "Great!"
}
 
const RatingBlock: React.FC<RatingBlockProps> = ({ onRating }) => {
    const [totalRating, setTotalRating] = useState<number>(0);

    const handleRating = (value: number) => {
        if(value === totalRating){            
            setTotalRating(totalRating - 1)
        }else{
            setTotalRating(value);
        }
    }

    useEffect(() => {
        if(totalRating > 0){
            onRating(totalRating)
        }
    }, [totalRating])

    return (
        <div className="rating-block">
            <div className="stars-wrapper">
                {
                    [...Array(5)].map((item, index) => {
                        let isSelected = (index + 1) <= totalRating ? "is-selected" : "";

                            return <span key={"star-"+index} className={isSelected} onClick={() => handleRating(index + 1)}></span>
                        }
                    )
                }
            </div>
            <div className="stars-rating-value">
            {totalRating > 0 && ratings[totalRating]}
            </div>
        </div>
    );
}
 
export default RatingBlock;