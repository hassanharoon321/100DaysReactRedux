import React from 'react'

function Listimages(props) {
    const newImages = props.imageOne.map((image) => {
        return <img src={image.alt_description} />
    })
    console.log(props.imageOne)
    return (
        <div>
            Image List:
            {newImages}
        </div>
    )
}

export default Listimages
