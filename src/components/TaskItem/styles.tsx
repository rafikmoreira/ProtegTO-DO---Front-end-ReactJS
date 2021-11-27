import styled from "styled-components"
import { convertPxToRem } from "../../util/conversao"

const TaskItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.cor9};
  border: solid ${convertPxToRem(1)} ${({ theme }) => theme.cor2};
  padding: ${convertPxToRem(10)};
  font-size: ${convertPxToRem(18)};
  margin-bottom: ${convertPxToRem(10)};
  border-radius: ${convertPxToRem(5)};
  &.completed {
    background-color: ${({ theme }) => theme.cor8};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export { TaskItemWrapper, Flexbox }
