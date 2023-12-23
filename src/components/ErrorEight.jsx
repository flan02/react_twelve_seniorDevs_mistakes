/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function ErrorEight() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => res.json())
      .then((data) => setPost(data));
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <h1>Error 8: Typescript mistakes</h1>
          <h3>{post?.title}</h3>
          <p>{post?.body}</p>
        </>
      )}
      <br />
      <br />
      <hr />
    </>
  );
}

export default ErrorEight;
