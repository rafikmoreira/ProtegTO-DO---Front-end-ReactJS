import styled from "styled-components"
import { convertPxToRem } from "../util/conversao"

const Input = styled.input`
  padding: ${convertPxToRem(10)} ${convertPxToRem(15)};
  background-color: ${({ theme }) => theme.cor9};
  display: block;
  color: ${({ theme }) => theme.cor2};
  width: 100%;
  font-weight: 600;
  font-size: ${convertPxToRem(19.1729)};
  line-height: ${convertPxToRem(19)};
  border: ${convertPxToRem(1)} solid ${({ theme }) => theme.cor2};
  border-radius: ${convertPxToRem(5)};
  outline: none;
  margin-bottom: ${convertPxToRem(10)};
`

export { Input }
