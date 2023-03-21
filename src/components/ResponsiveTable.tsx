import { ReactNode, useEffect, useMemo } from "react";

import "./ResponsiveTable.css";
import { ResponsiveTableColumn, ResponsiveTableDesignOptions } from "../types";
import { getDesignOptionsClasses } from "../utils";

import { ResposiveTableRow } from "./ResposiveTableRow";

export type TableProps = {
  data: Record<string | number, ReactNode>[];
  columns: ResponsiveTableColumn[];
  designOptions?: ResponsiveTableDesignOptions;
};

const ResponsiveTable: React.FC<TableProps> = ({
  data,
  columns,
  designOptions,
}) => {
  const designOptionsClasses = useMemo(
    () => getDesignOptionsClasses(designOptions),
    [designOptions]
  );

  // Update color design option
  useEffect(() => {
    if (!designOptions?.color) {
      return;
    }
    document.documentElement.style.setProperty(
      "--custom-color-table",
      designOptions?.color
    );
  }, [designOptions?.color]);

  return (
    <table
      className={`rtr-table ${designOptionsClasses}`}
      cellPadding="0"
      cellSpacing="0"
      border={0}
      bgcolor="#eeeeee"
      align="left"
      width="100%"
    >
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th data-label={col.label} key={idx}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, idx) => {
          return (
            <ResposiveTableRow
              row={row}
              idx={idx}
              columns={columns}
              key={`resposive-table-tr-${idx}`}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export { ResponsiveTable };
