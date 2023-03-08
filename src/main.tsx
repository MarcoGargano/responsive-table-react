import React from "react";
import ReactDOM from "react-dom/client";
import { Table } from "./App";

const data = [
  {
    N: "01",
    Name: "Marco",
    Surname: "Garsin",
    "E-mail": "mgarsin@email.com",
    Phone: "+39 333 1234567"
  }
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Table data={data} />
  </React.StrictMode>
);
