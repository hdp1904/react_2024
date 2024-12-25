import { Component } from "react";
import withFetch from "./hoc/withFetch";

class TodosList extends Component {
  render() {
    const { data: todos, isLoading, error, refetch, isRefetching } = this.props;

    if (isLoading) {
      return <div>loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>Todos List</h2>
        <button onClick={refetch}>Refetch</button>
        {isRefetching && <div>refetching...</div>}
        <div>
          {todos?.map((todo) => {
            return (
              <div key={todo.id}>
                <div>{todo.id}</div>
                <div>{todo.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withFetch(
  TodosList,
  "https://jsonplaceholder.typicode.com/todos"
);

// export default withC(
//   withB(
//     withA(
//       withForm(
//         withFetch(TodosList, "https://jsonplaceholder.typicode.com/todos")
//       )
//     )
//   )
// );
