/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function ErrorSeven() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setPost(data));
    setLoading(false);
  }, []);
  return (
    <article>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <h1>Error 7: Initializing state with object</h1>
          <h3>{post?.title}</h3>
          <p>{post?.body}</p>
        </>
      )}
      <br />
      <br />
      <hr />
    </article>
  );
}

export default ErrorSeven;
