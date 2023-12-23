/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    const handleWindowSizeChange = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);
  return windowSize;
};

export default function ExampleComponent1() {
  const windowSize = useWindowSize();
  console.log(windowSize);
  return (
    <>
      <h1>Error 9: Not using custom hooks</h1>
      <h3>current windowSize: {windowSize}</h3>
      <br />
      <br />
      <hr />
    </>
  );
}

export function ExampleComponent2() {
  const windowSize = useWindowSize();

  return (
    <>
      <h1>Component 2</h1>
    </>
  );
}
