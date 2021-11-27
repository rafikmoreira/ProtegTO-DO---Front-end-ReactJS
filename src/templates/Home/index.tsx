import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"
import { Login } from "../../components/Login"
import { PublicFooter } from "../../components/PublicFooter"
import { UserInfo } from "../../components/UserInfo"
import { AuthContext } from "../../context/auth"

const Home = () => {
  const { token } = useContext(AuthContext)
  let navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate("/tarefas")
    }
  })
  return (
    <div>
      <Header />
      <UserInfo />
      <Login />
      <PublicFooter />
    </div>
  )
}

export { Home }
