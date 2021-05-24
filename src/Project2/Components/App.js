import React from 'react';
import unSplash from '../Api/unSplash';
import SearchBar from './SearchBar';
import Listimages from "./Listimages";

class App extends React.Component {

    state = { images: [] }

    onSearchSubmit = async (term) => {
        const response = await unSplash.get("/search/photos", {
            params: { query: term },
        });
        
        this.setState = ({ images: response.data.results })
        // console.log(response.data.results)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <Listimages imageOne={this.state.images}/>
            </div>
        )
    }
}

export default App;
