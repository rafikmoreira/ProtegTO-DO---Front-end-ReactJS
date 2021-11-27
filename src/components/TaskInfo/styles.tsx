import styled from "styled-components"
import { convertPxToRem } from "../../util/conversao"

const TaskInfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.cor9};
  border: solid ${convertPxToRem(1)} ${({ theme }) => theme.cor2};
  padding: ${convertPxToRem(10)};
  border-radius: ${convertPxToRem(5)};
  text-align: center;
  p {
    margin: ${convertPxToRem(20)} 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
const Title = styled.h2`
  font-size: ${convertPxToRem(20)};

  font-weight: bold;
`

export { TaskInfoWrapper, Title }
