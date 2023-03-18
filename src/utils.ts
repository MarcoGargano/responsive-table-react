import { ResponsiveTableDesignOptions } from "./types"

export const getDesignOptionsClasses = (designOptions: ResponsiveTableDesignOptions | undefined) => {
  let designOptionsArray = ['']

  if(designOptions?.bordered){
    designOptionsArray.push('bordered')
  }

  if(designOptions?.dark){
    designOptionsArray.push('dark-mode')
  }

  return designOptionsArray.join(" ")
}