import * as React from "react";
import { Column, useTable, usePagination } from "react-table";
import TableCellComponent from "./TableCellComponent";

type Data = {
  col1: string;
  col2: string;
};

const TableWithPagination: React.FunctionComponent = () => {
  // columns holds the meta information
  // below is saying i am the column definition of data presented
  // in a type of data
  const columns = React.useMemo<Column<Data>[]>(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
        Cell: ({ row }) => TableCellComponent(row.original)
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
        col1: "Mccoy",
        col2: "Abbott"
      },
      {
        col1: "Bird",
        col2: "Mooney"
      },
      {
        col1: "Rose",
        col2: "Lancaster"
      },
      {
        col1: "Barker",
        col2: "Delacruz"
      },
      {
        col1: "Bishop",
        col2: "Stanley"
      },
      {
        col1: "Macdonald",
        col2: "Roman"
      },
      {
        col1: "Campos",
        col2: "Reeves"
      },
      {
        col1: "Beverley",
        col2: "Hubbard"
      },
      {
        col1: "Hanson",
        col2: "Lucas"
      },
      {
        col1: "Kim",
        col2: "Gates"
      },
      {
        col1: "Mckay",
        col2: "Welch"
      },
      {
        col1: "Bean",
        col2: "Wilson"
      },
      {
        col1: "Cantrell",
        col2: "Holt"
      },
      {
        col1: "Hughes",
        col2: "Meadows"
      },
      {
        col1: "Debbie",
        col2: "Salas"
      },
      {
        col1: "Tracy",
        col2: "Joyner"
      },
      {
        col1: "Daniel",
        col2: "Zimmerman"
      },
      {
        col1: "John",
        col2: "Woodward"
      },
      {
        col1: "Wade",
        col2: "Moss"
      },
      {
        col1: "Jacklyn",
        col2: "Mcmahon"
      },
      {
        col1: "Tamika",
        col2: "Mcconnell"
      },
      {
        col1: "Beard",
        col2: "White"
      },
      {
        col1: "Noelle",
        col2: "Hanson"
      },
      {
        col1: "Kristine",
        col2: "Weaver"
      },
      {
        col1: "Tucker",
        col2: "Ferrell"
      },
      {
        col1: "Ashley",
        col2: "Sutton"
      },
      {
        col1: "Lynette",
        col2: "Mcgowan"
      },
      {
        col1: "Jacobs",
        col2: "Chapman"
      },
      {
        col1: "Aguilar",
        col2: "Love"
      },
      {
        col1: "Golden",
        col2: "Mcleod"
      },
      {
        col1: "Castaneda",
        col2: "Hewitt"
      },
      {
        col1: "Abbott",
        col2: "Luna"
      },
      {
        col1: "Weber",
        col2: "King"
      },
      {
        col1: "Noemi",
        col2: "Mendez"
      },
      {
        col1: "Ryan",
        col2: "Torres"
      },
      {
        col1: "Obrien",
        col2: "Melton"
      },
      {
        col1: "Rhoda",
        col2: "Ray"
      },
      {
        col1: "Wheeler",
        col2: "Lang"
      },
      {
        col1: "Leticia",
        col2: "Powers"
      },
      {
        col1: "Mayra",
        col2: "Callahan"
      },
      {
        col1: "Susan",
        col2: "Dillon"
      },
      {
        col1: "Regina",
        col2: "Peterson"
      },
      {
        col1: "Hardin",
        col2: "Strong"
      },
      {
        col1: "Sawyer",
        col2: "Hurley"
      },
      {
        col1: "Wooten",
        col2: "Crane"
      },
      {
        col1: "Celia",
        col2: "Haley"
      },
      {
        col1: "Rosario",
        col2: "Hill"
      },
      {
        col1: "Guerrero",
        col2: "Dorsey"
      },
      {
        col1: "Stacie",
        col2: "Nash"
      },
      {
        col1: "Dixie",
        col2: "Flowers"
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 }
    },
    usePagination
  );

  return (
    <>
      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage
            },
            null,
            2
          )}
        </code>
      </pre>
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
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default TableWithPagination;
