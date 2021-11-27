import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"
import { Cadastro } from "../templates/Cadastro"
import { Home } from "../templates/Home"
import { Tarefa } from "../templates/Tarefa"
import { Tarefas } from "../templates/Tarefas"
import { ReactElement, ReactNode, useContext, useEffect } from "react"
import { AuthContext } from "../context/auth"
import { api } from "../api"
import { TarefaCadastro } from "../templates/TarefaCadastro"

type RouteType = {
  path: string
  element: any
  protected: boolean
}

const routes = [
  {
    path: "/",
    element: Home,
    protected: false,
  },
  {
    path: "/cadastro",
    element: Cadastro,
    protected: false,
  },
  {
    path: "/tarefas/cadastro",
    element: TarefaCadastro,
    protected: true,
  },
  {
    path: "/tarefas/:id",
    element: Tarefa,
    protected: true,
  },
  {
    path: "/tarefas",
    element: Tarefas,
    protected: true,
  },
  {
    path: "*",
    element: Home,
    protected: false,
  },
] as RouteType[]

const AppRouter = () => {
  const { token, setUser } = useContext(AuthContext)
  const localToken = localStorage.getItem("@protegotodo-token")

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get("/auto_login")
      setUser({
        profile: { ...data },
        token: localToken,
      })
    }
    if (localToken) {
      api.defaults.headers.common = { Authorization: `bearer ${localToken}` }
      fetchData()
    }
  }, [])

  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          if (route.protected && token) {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={route.path}
              />
            )
          }

          if (!route.protected) {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={route.path}
              />
            )
          }

          if (route.protected && !token) {
            return (
              <Route path={route.path} element={<Home />} key={route.path} />
            )
          }
        })}
      </Routes>
    </Router>
  )
}

export { AppRouter }
