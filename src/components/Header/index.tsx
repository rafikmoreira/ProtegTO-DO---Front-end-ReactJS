import { HeaderWrapper } from "./styles"
import logo from "../../assets/svg/logo.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/auth"

const Header = () => {
  const { token } = useContext(AuthContext)

  return (
    <HeaderWrapper>
      <h1 style={{ display: "none" }}>Protegto-do</h1>
      <Link to={token ? "/tarefas" : "/"}>
        <img src={logo} />
      </Link>
    </HeaderWrapper>
  )
}

export { Header }
