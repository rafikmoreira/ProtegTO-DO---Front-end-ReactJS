import styled from "styled-components"
import { convertPxToRem } from "../../util/conversao"

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.cor1};
  padding: ${convertPxToRem(10)} 0;
  display: flex;
  justify-content: center;
  img {
    max-height: ${convertPxToRem(52)};
  }
`

export { HeaderWrapper }
