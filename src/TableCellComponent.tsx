import * as React from "react";

interface ITableCellComponentProps {
  Original: any;
}

const TableCellComponent: React.FunctionComponent<ITableCellComponentProps> = (
  props
) => {
  console.log(props);
  return props.col1;
};

export default TableCellComponent;
