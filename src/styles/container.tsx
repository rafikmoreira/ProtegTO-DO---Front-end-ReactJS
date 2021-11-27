import styled from "styled-components"
import { convertPxToRem } from "../util/conversao"

const Container = styled.div`
  padding: 0 ${convertPxToRem(10)};
  max-width: ${convertPxToRem(1140)};
  margin: 0 auto;
`

export { Container }
