import { ReactNode, useState } from "react";

import { ResponsiveTableColumn } from "../types";

const ResposiveTableRow: React.FC<{
  row: Record<string | number, ReactNode>;
  idx: number;
  columns: ResponsiveTableColumn[];
}> = ({ row, idx, columns }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <tr
      className={isOpened ? "open" : ""}
      onClick={() => setIsOpened(!isOpened)}
      key={`responsive-table-row-${idx}`}
    >
      {columns.map((col, idx) => (
        <td data-label={col.field} key={`responsive-table-value-${idx}`}>
          {row[col.field]}
        </td>
      ))}
    </tr>
  );
};

export { ResposiveTableRow };
