import { ReactNode, useState } from "react";
import "./Table.css";
import { ResponsiveTableColumn } from "./types";

export type TableProps = {
  data: Record<string | number, ReactNode>[];
  columns: ResponsiveTableColumn[]
};

const ResponsiveTable:React.FC<TableProps> = ({ data, columns }) => {
  const columnsIds = columns.map(c => c.id)
  const rows = data.map(d => columnsIds.map(c => d[c]))

  const Tr: React.FC<{row: ReactNode[], idx: number}> = ({row, idx}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false)

    return <tr className={isOpened ? 'open' : ''} onClick={() => setIsOpened(!isOpened)} key={`responsive-table-row-${idx}`}>{row.map((value, idx) => <td data-label={columnsIds[idx]} key={`responsive-table-value-${idx}`}>{value}</td>)}</tr>;
  }

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
          if(row.filter(Boolean).length === 0){
            return null
          }

          return <Tr row={row} idx={idx} key={`resposive-table-tr-${idx}`}/>
        })}
      </tbody>
    </table>
  );
};

export { ResponsiveTable };
