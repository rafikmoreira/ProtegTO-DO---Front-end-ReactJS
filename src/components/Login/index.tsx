import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../../api"
import { AuthContext } from "../../context/auth"
import { Button } from "../../styles/button"
import { Container } from "../../styles/container"
import { Input } from "../../styles/input"
import { convertPxToRem } from "../../util/conversao"
import { LoginWrapper } from "./styles"

const Login = () => {
  const { setUser } = useContext(AuthContext)

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const setData = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    let payload = {
      [event.target.name]: event.target.value,
    }
    setLoginData((e) => {
      return { ...e, ...payload }
    })
  }

  const login = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    const { data } = await api.post("/login", {
      email: loginData.email,
      password: loginData.password,
    })
    if (data.token) {
      localStorage.setItem("@protegotodo-token", data.token)
      setUser({ token: data.token, profile: data.user })
      api.defaults.headers.common = { Authorization: `bearer ${data.token}` }
    } else {
      toast.error("Wow parece que algo deu errado, tente novamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  return (
    <LoginWrapper>
      <Container>
        <form onSubmit={login}>
          <Input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Informe o seu e-mail"
            onChange={setData}
          />
          <Input
            required
            type="password"
            name="password"
            id="password"
            onChange={setData}
            placeholder="Informe a sua senha"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: convertPxToRem(20),
            }}
          >
            <Link to="/cadastro">
              <Button
                type="button"
                className="error"
                style={{ marginRight: convertPxToRem(10) }}
              >
                Cadastro
              </Button>
            </Link>
            <Button type="submit" className="success">
              Login
            </Button>
          </div>
        </form>
      </Container>
    </LoginWrapper>
  )
}

export { Login }
