import styled from "styled-components"
import { convertPxToRem } from "../util/conversao"

const Button = styled.button`
  padding: ${convertPxToRem(10)} ${convertPxToRem(23)};
  font-size: ${convertPxToRem(19)};
  line-height: ${convertPxToRem(19)};
  font-weight: 600;
  color: ${({ theme }) => theme.cor2};
  border-radius: ${convertPxToRem(5)};
  border: none;
  cursor: pointer;
  transition: 0.4s;
  &.success {
    background-color: ${({ theme }) => theme.cor8};
    &:hover {
      background-color: ${({ theme }) => theme.cor2};
      color: ${({ theme }) => theme.cor3};
    }
  }

  &.error {
    background-color: ${({ theme }) => theme.cor5};
    &:hover {
      background-color: ${({ theme }) => theme.cor2};
      color: ${({ theme }) => theme.cor3};
    }
  }

  &.edit {
    background-color: ${({ theme }) => theme.cor6};
    &:hover {
      background-color: ${({ theme }) => theme.cor2};
      color: ${({ theme }) => theme.cor3};
    }
  }
`
export { Button }
