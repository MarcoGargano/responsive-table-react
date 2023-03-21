import { ResponsiveTableDesignOptions } from "./types";

export const getDesignOptionsClasses = (
  designOptions: ResponsiveTableDesignOptions | undefined
) => {
  const designOptionsArray = [];

  if (designOptions?.bordered) {
    designOptionsArray.push("bordered");
  }

  if (designOptions?.dark) {
    designOptionsArray.push("dark-mode");
  }

  if (designOptions?.color) {
    designOptionsArray.push("custom-color");
  }

  return designOptionsArray.join(" ");
};
