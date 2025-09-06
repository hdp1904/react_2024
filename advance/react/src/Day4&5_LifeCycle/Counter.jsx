import React, { Component, useEffect, useState } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // console.log("constructor the component");
  }

  componentDidMount() {
    // console.log("component did mount");
    // this.invokeSideEffect();
    this.startCountDown();
  }

  componentDidUpdate() {
    // console.log("component did update");
  }

  componentWillUnmount() {
    // console.log("component will unmount");

    clearTimeout(this.timeoutId);
  }

  startCountDown = () => {
    this.timeoutId = setTimeout(() => {
      console.log("you've stayed for too long");
    }, 2 * 1000);
  };

  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // console.log("rendering...");

    return (
      <div>
        <h2>Class {this.props.title}</h2>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

function FnCounter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Function {title}</h2>
      <div>Count: {count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}
