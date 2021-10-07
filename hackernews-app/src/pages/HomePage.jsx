import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

//Components
import Story from "../components/Story";
import Loader from "../components/Loader";
import Error from "../components/Error";

const STORYCONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
`

const HEADER = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FOOTER = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
`

/**
* @returns {component} - Homepage with header and loader or header, 20 stories and footer
*/

function HomePage () {
  const [storiesIds, setStoriesIds] = useState([])
  const [stories, setStories] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [start, setStart] = useState(0)
  const [update, setUpdate] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    //Fetch stories ids
    async function getStoriesIds() {
      try {
        await axios
          .get("https://hacker-news.firebaseio.com/v0/topstories.json")
          .then(response => setStoriesIds(response.data))
      } catch (err) {
        console.log(err)
        setError(true)
      }
    }

    getStoriesIds()

    //Refresh the list of posts every 30 seconds
    const interval = setInterval(() => getStoriesIds(), 30000);
    return () => {
      clearInterval(interval);
    }
  }, [update])

  useEffect(() => {
    setStories([])
    //Fetch stories content
    async function getStory(storyId) {
      setDataLoading(true)
      try {
        await axios
          .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
          .then(response => setStories(stories => [...stories, response.data]))
        } catch (err) {
          console.log(err)
          setError(true)
        } finally {
          setDataLoading(false)
        }
    }
    storiesIds.slice(start, start+20).map(storyId => getStory(storyId))
  }, [storiesIds, start])

  return (
    <Fragment>
      <HEADER>
        <h1>HackerNews</h1>
        <i onClick = {() => setUpdate(!update)} className = "fas fa-redo-alt"></i>
      </HEADER>
      <main>
        {!error ?
          dataLoading ?
            <Loader />
          :
            <STORYCONTAINER>
              {stories.map((story, index) => (
                <Story
                  key = {index}
                  position = {start + index}
                  content = {story}
                />
              ))}
            </STORYCONTAINER>
        :
          <Error />
        }
      </main>
      {!dataLoading && (
        <FOOTER>
          {start !== 0 && <i onClick = {() => setStart(start - 20)} className = "fas fa-arrow-circle-left"></i>}
          <i onClick = {() => setStart(start + 20)} className = "fas fa-arrow-circle-right"></i>
        </FOOTER>
      )}
    </Fragment>
  );
};

export default HomePage;