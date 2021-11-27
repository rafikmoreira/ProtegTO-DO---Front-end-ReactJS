import { Header } from "../../components/Header"
import { MenuFooter } from "../../components/MenuFooter"
import { UserInfo } from "../../components/UserInfo"
import { TarefasWrapper } from "./styles"
import { Tasks } from "../../components/Tasks"
import { TasksProvider } from "../../context/tasks"
import { useParams, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { TaskInfo } from "../../components/TaskInfo"
import { api } from "../../api"
import { Container } from "../../styles/container"

type Task = {
  titulo: string
  descricao: string
  id: number
  status: number
  visibilidade: number
  user_id: number
}

const Tarefas = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  let item = searchParams.get("item")

  const [task, setTask] = useState<Task | null>(null)

  useEffect(() => {
    setTask(null)
    const fetchData = async () => {
      const { data } = await api.get(`tarefas/${item}`)
      setTask(data)
    }

    if (item) {
      fetchData()
    }
  }, [item])

  return (
    <TarefasWrapper>
      <div style={{ position: "sticky", top: 0, backgroundColor: "#fafafa" }}>
        <Header />
        <UserInfo />
      </div>
      <div
        style={{
          overflowY: "scroll",
          height: "100%",
        }}
      >
        {task && (
          <Container>
            <TaskInfo {...task} />
          </Container>
        )}
        {!item && (
          <TasksProvider>
            <Tasks />
          </TasksProvider>
        )}
      </div>
      <MenuFooter />
    </TarefasWrapper>
  )
}

export { Tarefas }
