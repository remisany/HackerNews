import React, { useState } from 'react';
import { useEffect } from 'react';

//Api
import getStoryIds from '../api/getStoryIds';
import getStory from '../api/getStory';

//Style
import '../App.css';

function HomePage () {
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data))
  }, [])

  useEffect(() => {
    storyIds.map((storyId) => (
      getStory(storyId).then(data => console.log(data))
    ))
  }, [storyIds])

  return (
    <p>Test</p>
  );
}

export default HomePage;


  //Automatically refresh the list of posts every 30 seconds

  /*
  const [timer, setTimer] = useState(false)
  useEffect(() => {
    getStoryId()
  }, [timer])

  setTimeout(() => {
    setTimer(!timer)
  }, 30000)
  */
