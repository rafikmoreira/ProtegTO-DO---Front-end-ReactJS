import { Header } from "../../components/Header"
import { PublicFooter } from "../../components/PublicFooter"
import { Register } from "../../components/Register"
import { UserInfo } from "../../components/UserInfo"
import { CadastroWrapper } from "./styles"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/auth"

const Cadastro = () => {
  const { token } = useContext(AuthContext)
  let navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate("/tarefas")
    }
  })

  return (
    <CadastroWrapper>
      <Header />
      <UserInfo />
      <Register />
      <PublicFooter />
    </CadastroWrapper>
  )
}

export { Cadastro }
