import React, { useState, useEffect } from "react";
import StarCard from "./StarCard";
import axios from "axios";

export default function StarData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log(response.data.results);
                setData(response.data.results);
            })
    }, [])

    return(
        <div className="StarData">
            {data.map(data => {
                return (
                    <StarCard 
                        id={data.id}
                        name={data.name}
                        height={data.height}
                        mass={data.mass}
                    />
                );
            })}
        </div>
    );
}