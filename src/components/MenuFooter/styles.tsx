import styled from "styled-components"
import { convertPxToRem } from "../../util/conversao"

const MenuFooterWrapper = styled.footer`
  padding: ${convertPxToRem(10)} 0;
  background-color: ${({ theme }) => theme.cor6};
  color: ${({ theme }) => theme.cor1};
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    li {
      transition: 0.4s;
      margin: 0 5px;
      font-size: 40px;
      &:hover {
        color: ${({ theme }) => theme.cor2};
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export { MenuFooterWrapper }
