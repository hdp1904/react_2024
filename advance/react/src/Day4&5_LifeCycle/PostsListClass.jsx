import React, { Component } from "react";

export default class PostsListClass extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h1>Posts List</h1>
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <div>Post {post.id}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
