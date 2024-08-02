import { Component, PureComponent, memo } from "react";

interface CounterProps {
  count: number;
  config: {
    a: string;
    b: string;
  };
  handleClick: () => void;
}

function Counter({ count }: CounterProps) {
  console.log("Counter rerenders");
  return <h1>{count}</h1>;
}

// has a 2nd argument: "arePropsEqual" compare function
// to customize the comparison of props
export default memo(Counter);

// if props are the same, don't re-render
export class ClassCounter extends PureComponent<CounterProps> {
  render() {
    console.log("ClassCounter rerenders");
    return <h1>{this.props.count}</h1>;
  }
}

// export default ClassCounter;
