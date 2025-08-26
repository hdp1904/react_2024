import { Component } from "react";

// Higher Order component takes in another component as argument
// this is a pattern mainly used before 16.8, before hooks
const withFetch = (OldComponent, api) => {
  return class NewComponent extends Component {
    state = {
      data: null,
      isLoading: false,
      error: null,
      isRefetching: false,
    };

    componentDidMount() {
      this.setState({ isLoading: true });
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data });
        })
        .catch((err) => {
          this.setState({ error: "error" });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }

    refetch = () => {
      this.setState({ isRefetching: true });
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data });
        })
        .catch((err) => {
          this.setState({ error: "error" });
        })
        .finally(() => {
          this.setState({ isRefetching: false });
        });
    };

    render() {
      const { data, isLoading, error, isRefetching } = this.state;
      return (
        <div style={{ border: "1px solid white" }}>
          <OldComponent
            data={data}
            isLoading={isLoading}
            error={error}
            refetch={this.refetch}
            isRefetching={isRefetching}
          />
        </div>
      );
    }
  };
};

export default withFetch;
