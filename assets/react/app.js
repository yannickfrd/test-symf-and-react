import React from "react";
import {createRoot} from "react-dom/client";
import Title from "./component/Title";
import TestGet from "./component/TestGet";

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Title />
        <TestGet />
    </React.StrictMode>
)
