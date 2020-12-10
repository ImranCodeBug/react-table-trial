import * as React from "react";

interface ITableCellComponentProps {
  Original: any;
}

const TableCellComponent: React.FunctionComponent<ITableCellComponentProps> = (
  props
) => {
  return props.col1;
};

export default TableCellComponent;
