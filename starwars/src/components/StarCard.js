import React from "react";

const StarCard = props => {
    console.log(props);
    return (
        <div className="StarData" key={props.id}>
            <h2>{props.name}</h2>
            <p>Mass: {props.mass}</p>
            <p>Height: {props.height}</p>

        </div>
    )
}
export default StarCard;