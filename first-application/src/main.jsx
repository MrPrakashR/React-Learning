import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./componenets/Cart";
import CreateTodo from "./componenets/CreateTodo";

const MyFirstElement = <h1>This is my first element</h1>;

ReactDOM.createRoot(document.getElementById("root"))
.render(
    <React.StrictMode>
        <CreateTodo />
    </React.StrictMode>
);
