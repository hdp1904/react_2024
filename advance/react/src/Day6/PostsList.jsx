import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

export default function PostsList() {
  const {
    loading,
    error,
    data: posts,
    isRefetching,
    refetch,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h2>Posts List</h2>
      <button onClick={refetch}>Refetch Data</button>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          {isRefetching && <div>refetching data...</div>}
          <div>
            {posts?.map(({ id, title }) => {
              return (
                <React.Fragment key={id}>
                  <div>{id}</div>
                  <div>{title}</div>
                </React.Fragment>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// version without custom hook
// export default function PostsList() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data);
//       })
//       .catch((err) => {
//         setError("Some error");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Posts List</h2>
//       {loading ? (
//         <div>loading...</div>
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : (
//         <div>
//           {posts.map(({ id, title }) => {
//             return (
//               <React.Fragment key={id}>
//                 <div>{id}</div>
//                 <div>{title}</div>
//               </React.Fragment>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }
