import React from 'react'
import SearchBar from './Components/SearchBar';
import youtube from "./Apis/youtube";
import VideoList from "./Components/VideoList"

class App extends React.Component {
    state = { videos: [], selectedVideo: null }
    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        })
        console.log(response)
        this.setState({ videos: response.data.items })
        console.log("17")

    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App
