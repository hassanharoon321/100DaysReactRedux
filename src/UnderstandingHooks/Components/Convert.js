import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Convert({ language, text }) {
    const [translated,setTranslated] = useState("");
    const [deBouncedText,setDebouncedText] = useState(text);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedText(text)
        },500)
        return()=>{
            clearTimeout(timerId)
        }
    },[text])

    useEffect( ()=>{
        const doTranslate = async()=>{
            const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2",{},{
                params:{
                    q:deBouncedText,
                    target:language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }  
        doTranslate()   
    },[language,deBouncedText] )
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert
