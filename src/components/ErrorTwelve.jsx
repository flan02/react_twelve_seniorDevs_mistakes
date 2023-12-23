/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const ErrorTwelve = () => {
  const [id, setId] = useState(1);
  return (
    <>
      <h1>Error 12: Fetching in useEffect</h1>
      <div>
        <button onClick={() => setId(Math.floor(Math.random() * 100))}>
          Show me a different post
        </button>
        <PostBody id={id} />
      </div>
    </>
  );
};

export default ErrorTwelve;

export function PostBody({ id }) {
  const [text, setText] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => setText(data.body));
    return () => controller.abort();
  }, [id]);

  return <p>{text}</p>;
}
