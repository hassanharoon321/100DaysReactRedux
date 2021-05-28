import React from 'react'
import Accordion from './Components/Accordion'
import Counter from './Counter'

function App() {

    const items = [
        {
            title: "What is React?",
            content : "React is JS Library"
        },
        {
            title: "Why use React?",
            content : "React is fav Js Library among Engingers"
        },
        {
            title: "How do you use React?",
            content : "BY creating Components"
        },

    ]


    return (
        <div>
            {/* <Accordion items={items}/> */}
            <Counter/>
        </div>
    )
}

export default App
