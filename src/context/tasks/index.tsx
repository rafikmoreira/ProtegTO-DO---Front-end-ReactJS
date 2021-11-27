import { createContext, useState } from "react"
import { api } from "../../api"

type Task = {
  titulo: string
  descricao: string
  id: number
  status: number
  visibilidade: number
  user_id: number
}

type TypeTasksContext = {
  tasks: Task[]
  load: any
}

const TasksContext = createContext<TypeTasksContext>({
  tasks: [],
  load: () => {},
})

const TasksProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const load = async () => {
    const { data } = await api.get("/tarefas")
    setTasks(data)
  }

  return (
    <TasksContext.Provider value={{ tasks, load }}>
      {children}
    </TasksContext.Provider>
  )
}

export { TasksContext, TasksProvider }
