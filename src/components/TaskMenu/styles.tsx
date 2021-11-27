import styled from "styled-components"
import { convertPxToRem } from "../../util/conversao"

const Menu = styled.ul`
  display: flex;
`

const Item = styled.li`
  cursor: pointer;
  margin: 0 ${convertPxToRem(5)};
  font-size: ${convertPxToRem(25)};
  padding: ${convertPxToRem(4)};
  border-radius: 50%;
  border: solid ${convertPxToRem(1)} ${({ theme }) => theme.cor2};
  display: flex;
  transition: 400ms;
  &.check {
    background-color: ${({ theme }) => theme.cor8};
  }
  &.edit {
    background-color: ${({ theme }) => theme.cor6};
  }
  &.delete {
    background-color: ${({ theme }) => theme.cor5};
  }
  &.show {
    background-color: ${({ theme }) => theme.cor7};
  }
  &:hover {
    background-color: ${({ theme }) => theme.cor2};
    color: #fff;
  }
`

export { Menu, Item }
