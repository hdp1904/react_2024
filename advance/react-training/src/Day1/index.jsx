import React from "react";

export default function Day1React() {
  // return <div>Day1React</div>;
  return (
    <>
      <Foo />
      <Foo />
    </>
  );
}

function Foo({ title, url, desc }) {
  return (
    <div>
      <div>Title, {title}</div>
      <div>{url}</div>
      <div>{desc.toLowerCase()} </div>
    </div>
  );
}
