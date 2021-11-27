import styled from "styled-components"
import { convertPxToRem } from "../../util/conversao"

const PublicFooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: ${convertPxToRem(10)} 0;
  img {
    max-width: ${convertPxToRem(40)};
    margin-bottom: ${convertPxToRem(10)};
  }
  p {
    text-transform: uppercase;
  }
`

export { PublicFooterWrapper }
