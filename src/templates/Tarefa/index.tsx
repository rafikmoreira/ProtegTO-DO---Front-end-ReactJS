import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { MenuFooter } from "../../components/MenuFooter"
import { TaskForm } from "../../components/TaskForm"
import { UserInfo } from "../../components/UserInfo"
import { TarefaWrapper } from "./styles"
import { useState, useEffect } from "react"
import { api } from "../../api"

type Tarefa = {
  titulo: string
  descricao: string
  id: number
  status: number
  visibilidade: number
  user_id: number
}

const Tarefa = () => {
  const { id } = useParams()
  const [task, setTask] = useState<Tarefa>()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get(`/tarefas/${id}`)
      setTask(data)
    }
    fetchData()
  }, [])

  return (
    <TarefaWrapper>
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
          <TaskForm
            titulo={task.titulo}
            descricao={task.descricao}
            id={task.id}
            status={task.status}
            visibilidade={task.visibilidade}
            user_id={task.user_id}
          />
        )}
      </div>
      <MenuFooter />
    </TarefaWrapper>
  )
}

export { Tarefa }
