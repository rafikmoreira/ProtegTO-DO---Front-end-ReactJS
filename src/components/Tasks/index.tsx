import { useEffect, useState, useContext } from "react"
import { api } from "../../api"
import { TasksContext } from "../../context/tasks"
import { Container } from "../../styles/container"
import { TaskItem } from "../TaskItem"
import { TasksWrapper } from "./styles"

type Task = {
  titulo: string
  id: number
  descricao: string
  visibilidade: number
  status: number
  user_id: number
}

const Tasks = () => {
  const { tasks, load } = useContext(TasksContext)

  useEffect(() => {
    load()
  }, [])

  return (
    <TasksWrapper>
      <Container>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <TaskItem
                  user_id={task.user_id}
                  titulo={task.titulo}
                  descricao={task.descricao}
                  id={task.id}
                  status={task.status}
                  visibilidade={task.visibilidade}
                />
              </li>
            )
          })}
        </ul>
      </Container>
    </TasksWrapper>
  )
}

export { Tasks }
