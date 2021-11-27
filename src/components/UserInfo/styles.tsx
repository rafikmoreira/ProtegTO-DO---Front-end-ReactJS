import styled from "styled-components"
import { convertPxToRem } from "../../util/conversao"

const Flexbox = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: ${convertPxToRem(8)};
  }
`

const UserInfoWrapper = styled.section`
  padding: ${convertPxToRem(20)} 0;
  display: flex;
  justify-content: center;
  p {
    font-weight: 600;
    font-size: ${convertPxToRem(19.1729)};
    line-height: ${convertPxToRem(19)};
    strong {
      color: ${({ theme }) => theme.cor1};
    }
  }
`

export { UserInfoWrapper, Flexbox }
