import { ReactNode } from "react";

export type ResponsiveTableColumn = { id: string | number, text: string }

export type TableProps = {
  data: Record<string | number, ReactNode>[];
  columns: ResponsiveTableColumn[]
};