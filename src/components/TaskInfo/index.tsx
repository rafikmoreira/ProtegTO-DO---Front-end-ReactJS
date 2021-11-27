import { TaskMenu } from "../TaskMenu"
import { TaskInfoWrapper, Title } from "./styles"

type Task = {
  titulo: string
  descricao: string
  id: number
  status: number
  visibilidade: number
  user_id: number
}

const TaskInfo = (props: Task) => {
  return (
    <TaskInfoWrapper>
      <Title>{props.titulo}</Title>
      <p>{props.descricao}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TaskMenu {...props} />
      </div>
    </TaskInfoWrapper>
  )
}

export { TaskInfo }
