import React from "react";
import styled from 'styled-components'

const DataBackground = styled.div`
    background-color: grey;
    opacity: 0.8;
    width: 40%;
    margin-left: 30%;
`

const NewHeader = styled.h2`
    font-family: 'Press Start 2P', cursive;
    margin: 1%;
`

const NewPara = styled.p`
    font-family: 'Geostar Fill', cursive;
`

const StarCard = props => {
    console.log(props);
    return (
        <DataBackground className="StarData" key={props.id}>
            <NewHeader>{props.name}</NewHeader>
            <NewPara>Mass: {props.mass}kg</NewPara>
            <NewPara>Height: {props.height}cm</NewPara>

        </DataBackground>
    )
}
export default StarCard;