import React, { Component } from "react";
import PostsList from "./PostsList";
import TodosList from "./TodosList";

export default class Day7 extends Component {
  render() {
    return (
      <div>
        <h2>Day 7</h2>
        <PostsList />
        {/* <TodosList /> */}
      </div>
    );
  }
}
