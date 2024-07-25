import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function NotFoundPage() {
  const history = useHistory();
  useEffect(() => {
    const id = setTimeout(() => {
      history.push("/about");
    }, 3000);

    return clearTimeout(id);
  }, []);

  // return <Redirect to={"/"} />;
  return <h1>404 NotFoundPage</h1>;
}
