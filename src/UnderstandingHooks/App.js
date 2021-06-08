import React,{useState} from 'react'
import Accordion from './Components/Accordion'
import Dropdown from './Components/Dropdown'
import Search from './Components/Search'
import Translate from './Components/Translate'
import Counter from './Counter'
import GetRequest from './GetRequest'

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

    const options = [
        {label:"The color Red",value:"red"},
        {label:"The color Green",value:"green"},
        {label:"The shade of Blue",value:"blue"}
    ]

    const [selected,setSelected] = useState(options[0]);


    return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            {/* <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/> */}
            {/* <Translate/> */}
            <GetRequest/>
        </div>
    )
}

export default App
