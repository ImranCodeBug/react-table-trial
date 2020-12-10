import * as React from "react";
import { Column, useTable } from "react-table";

type Data = {
  col1: string;
  col2: string;
};

const SimpleTable: React.FunctionComponent = () => {
  // columns holds the meta information
  // below is saying i am the column definition of data presented
  // in a type of data
  const columns = React.useMemo<Column<Data>[]>(
    () => [
      {
        Header: "Column 1",
        accessor: "col1" // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2"
      }
    ],
    []
  );

  const data = React.useMemo<Data[]>(
    () => [
      {
        col1: "Hello",
        col2: "World"
      },
      {
        col1: "react-table",
        col2: "rocks"
      },
      {
        col1: "whatever",
        col2: "you want"
      }
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SimpleTable;
