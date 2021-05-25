import axios from "axios";

const KEY = "AIzaSyA5xVo4wNBjnV5Zn1eXIqIz_J6Ob1J0hIY"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: "5",
        key: KEY
    }
})