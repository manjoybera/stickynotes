import React from "react";
import ReactDOMClient from "react-dom/client";

import { App } from "./components/App";

ReactDOMClient.createRoot(document.querySelector("#root")).render(<App />);
