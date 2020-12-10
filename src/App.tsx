import * as React from "react";
import SimpleTable from "./SimpleTable";
import "./styles.css";
import TableWithCustomColumn from "./TableWithCustomColumn";
import TableWithPagination from "./TableWithPagination";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* <SimpleTable /> */}

      {/* <TableWithCustomColumn /> */}

      <TableWithPagination />
    </div>
  );
}
