import axios from "axios"

function getStoryIds () {
    return axios
        .get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(response => response.data)
}

export default getStoryIds