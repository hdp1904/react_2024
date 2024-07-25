import React from 'react'

export default function AddingInteractivity() {
    const handleClick = () => {
        console.log("clicked")
    }

    const fetchPostById = id => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
            return response.json()
        }
        ).then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <div>AddingInteractivity</div>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                fetchPostById(1)
            }}>Fetch Post By Id: 1</button>
        </div>
    )
}


// function foo(){
//     return 5
// }

// foo vs foo()