import { TaskItemWrapper, Flexbox } from "./styles"
import { TaskMenu } from "../TaskMenu"

type TaskProps = {
  titulo: string
  descricao: string
  id: number
  status: number
  visibilidade: number
  user_id: number
}

const TaskItem = (props: TaskProps) => {
  return (
    <TaskItemWrapper className={props.status ? "completed" : ""}>
      <Flexbox>
        <h2>{props.titulo}</h2>
        <TaskMenu {...props} />
      </Flexbox>
    </TaskItemWrapper>
  )
}

export { TaskItem }
