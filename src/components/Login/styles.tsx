import styled from "styled-components"

import { convertPxToRem } from "../../util/conversao"

const LoginWrapper = styled.section`
  form {
    max-width: ${convertPxToRem(400)};
  }
  display: flex;
  justify-content: center;
`

export { LoginWrapper }
