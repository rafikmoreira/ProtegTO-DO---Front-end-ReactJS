import { convertPxToRem } from "../util/conversao"

const breakpoints = {
  sm: convertPxToRem(640),
  md: convertPxToRem(768),
  lg: convertPxToRem(1024),
  xl: convertPxToRem(1280),
}

export { breakpoints }
