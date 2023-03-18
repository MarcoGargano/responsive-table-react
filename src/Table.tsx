import { ReactNode } from "react";
import "./Table.scss";
import { TableProps } from "./types";

const ResponsiveTable = ({ data, columns }: TableProps) => {
  const columnsIds = columns.map(c => c.id)
  const rows = data.map(d => columnsIds.map(c => d[c]))

  return (
    <table
      className="rtr-table bordered"
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
            <th data-label={col.text} key={idx}>
              {col.text}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, idx) => {
          return <tr key={`responsive-table-row-${idx}`}>{row.map((value, idx) => <td data-label={columnsIds[idx]} key={`responsive-table-value-${idx}`}>{value}</td>)}</tr>;
        })}
      </tbody>
    </table>
  );
};

export { ResponsiveTable };
