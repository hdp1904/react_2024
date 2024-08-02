import React, { Component } from "react";
import withFetch from "./hoc/withFetch";

class PostsList extends Component {
  render() {
    const { data: posts, isLoading, error, refetch, isRefetching } = this.props;

    if (isLoading) {
      return <div>loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Posts List</h1>
        <button onClick={refetch}>Refetch</button>
        {isRefetching && <div>refetching...</div>}
        <div>
          {posts?.map((post) => {
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

export default withFetch(
  PostsList,
  "https://jsonplaceholder.typicode.com/posts"
);
