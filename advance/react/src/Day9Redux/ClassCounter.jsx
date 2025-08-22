import React, { Component } from "react";
import { connect } from "react-redux";
import { addCount } from "../redux/reducers/countReducer";

class ClassCounter extends Component {
  render() {
    const { count, theme, increment } = this.props;

    return (
      <div>
        <h2>Class Counter</h2>
        <button onClick={increment}>Add</button>
        <div>Theme: {theme}</div>
        <div>Count: {count}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(addCount());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
