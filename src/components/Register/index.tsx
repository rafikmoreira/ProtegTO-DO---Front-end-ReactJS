import { Input } from "../../styles/input"
import { Link } from "react-router-dom"
import { convertPxToRem } from "../../util/conversao"
import { Button } from "../../styles/button"
import { useState, useContext } from "react"
import { RegisterWrapper } from "./styles"
import { Container } from "../../styles/container"
import { api } from "../../api"
import { AuthContext } from "../../context/auth"
import { toast } from "react-toastify"

const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  })

  const { setUser } = useContext(AuthContext)

  const setData = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    let payload = {
      [event.target.name]: event.target.value,
    }
    setRegisterData((e) => {
      return { ...e, ...payload }
    })
  }

  const register = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    const { data } = await api.post("/users", {
      email: registerData.email,
      password: registerData.password,
      nome: registerData.name,
    })
    if (registerData.passwordConfirm != registerData.password) {
      toast.error("Wow as senhas não são iguais!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } else if (data.token) {
      localStorage.setItem("@protegotodo-token", data.token)
      setUser({ token: data.token, profile: data.user })
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
    <RegisterWrapper>
      <Container>
        <form onSubmit={register}>
          <Input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Informe o seu nome"
            onChange={setData}
          />
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
          <Input
            required
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            onChange={setData}
            placeholder="Repita a sua senha"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: convertPxToRem(20),
            }}
          >
            <Button type="submit" className="error">
              Cadastrar
            </Button>
          </div>
        </form>
      </Container>
    </RegisterWrapper>
  )
}

export { Register }
