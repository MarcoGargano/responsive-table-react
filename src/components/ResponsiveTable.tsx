import {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

import "./ResponsiveTable.css";
import { ResponsiveTableColumn, ResponsiveTableDesignOptions } from "../types";
import { getDesignOptionsClasses } from "../utils";

import { ResposiveTableRow } from "./ResposiveTableRow";

export type TableProps = {
  data: Record<string | number, ReactNode>[];
  columns: ResponsiveTableColumn[];
  designOptions?: ResponsiveTableDesignOptions;
  itemToShow?: number;
};

const ResponsiveTable: React.FC<TableProps> = ({
  data,
  columns,
  designOptions,
  itemToShow = 10
}) => {
  const designOptionsClasses = useMemo(
    () => getDesignOptionsClasses(designOptions),
    [designOptions]
  );

  const [dataToView, setDataToView] = useState<
    Record<string | number, ReactNode>[]
  >(data.slice(0, itemToShow));

  const [[firstIndex, lastIndex], setLastIndex] = useState<number[]>([
    0,
    itemToShow
  ]);

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

  const loadMore = useCallback(() => {
    const indexToChange = [firstIndex + itemToShow, lastIndex + itemToShow];
    const dataSliced = data.slice(indexToChange[0], indexToChange[1]);

    setLastIndex(indexToChange);
    setDataToView((prev) => [...prev, ...dataSliced]);
  }, [firstIndex, lastIndex]);

  return (
    <Fragment>
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
          {dataToView.map((row, idx) => {
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
      <div className="rtr-table-more">
        <button type="button" onClick={() => loadMore()}>+</button>
      </div>
    </Fragment>
  );
};

export { ResponsiveTable };
