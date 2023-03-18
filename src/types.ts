import { ReactNode } from "react";

export type ResponsiveTableColumn = { id: string, text: string }

export type TableProps = {
  data: Record<string, ReactNode>[];
  columns: ResponsiveTableColumn[]
};