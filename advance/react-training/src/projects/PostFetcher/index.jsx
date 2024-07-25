import React, { Component, useEffect, useState } from "react";

export class PostFetcherClass extends Component {
  render() {
    return (
      <div>
        <h2>Post Fetcher</h2>
        <div>Current Post Id: {1}</div>
        <div>
          <div>Title: </div>
          <div>UserId: </div>
          <div>Body:</div>
        </div>
        {/* assume the minimum id is 1, max is 100, disable the buttons if needed */}
        <button>Prev</button>
        <button>Next</button>
      </div>
    );
  }
}

export function PostFetcherFn() {
  const [currPostId, steCurrPostId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [post, setPost] = useState({
    userId: null,
    id: "",
    title: "",
    body: "",
  });

  const { id, userId, title, body } = post;

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${currPostId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currPostId]);

  const handleNext = () => {
    steCurrPostId(currPostId + 1);
  };

  const handlePrev = () => {
    steCurrPostId(currPostId - 1);
  };

  return (
    <div>
      <h2>Post Fetcher</h2>
      <div>Current Post Id: {currPostId}</div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>Title: {title}</div>
          <div>UserId: {userId}</div>
          {/* <div>Body: </div> */}
        </div>
      )}
      {/* assume the minimum id is 1, max is 100, disable the buttons if needed */}
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

// bonus: use input bar to enter the id of the post. if id is out of range, display some error message
