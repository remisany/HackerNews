import axios from "axios"

function getStory (storyId) {
    return axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        .then(response => response.data)
}

export default getStory