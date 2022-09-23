import React from 'react';
import { createRoot } from "react-dom/client";
import { Tree } from "./components/Tree/index.tsx";

function App() {
  return <Tree />;
}

function main() {
  const container = document.querySelector("#main");

  const root = createRoot(container);

root.render(React.createElement(App));
}

addEventListener("DOMContentLoaded", () => {
  main();
});
