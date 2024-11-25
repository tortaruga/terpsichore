import arrowBlack from '/assets/arrow-black.png'
import arrowGold from '/assets/arrow-gold.png'
import { useState } from 'react';

export default function ExploreCard(props) {

    const [isHovered, setIsHovered] = useState(false);

    function handleHoverIn() {
        setIsHovered(true)
    }

    function handleHoverOut() {
        setIsHovered(false)
    }

    return (
        <div className="explore--card">
            <h1 onMouseOver={handleHoverIn} onMouseOut={handleHoverOut} className="card-title">{props.title} 
                {!isHovered ? <img src={arrowBlack} alt="arrow icon" /> : <img src={arrowGold} alt="arrow icon" />}</h1>
                <img className="card-img" src={props.img} alt="card image" />
            <ul className="card-links">
                <li className="card-link"><a href="#">{props.links[0]}</a></li>
                <li className="card-link"><a href="#">{props.links[1]}</a></li>
                <li className="card-link"><a href="#">{props.links[2]}</a></li>
            </ul>
        </div>
    )

}