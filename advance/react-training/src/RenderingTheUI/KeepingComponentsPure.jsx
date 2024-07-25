import React, { useEffect } from 'react'

export default function KeepingComponentsPure() {
    return (
        <div>
            <div>
                KeepingComponentsPure
            </div>
            <Person name="Jack" age={11} profession="neuron surgeon" />
        </div>
    )
}


function Person({ name, age, profession }) {

    return (
        <div>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{profession}</p>
        </div>
    )
}