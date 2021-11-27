import { Link, useSearchParams } from "react-router-dom"
import { api } from "../../api"
import { Item, Menu } from "./styles"
import { toast } from "react-toastify"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth"
import { TasksContext } from "../../context/tasks"

type TaskProps = {
  titulo: string
  descricao: string
  id: number
  status: number
  visibilidade: number
  user_id: number
}

const TaskMenu = (props: TaskProps) => {
  const { profile } = useContext(AuthContext)
  const { load } = useContext(TasksContext)

  let [searchParams, setSearchParams] = useSearchParams()

  let item = searchParams.get("item")

  const [verifyItemShow, setVerifyItemShow] = useState<boolean>(false)

  useEffect(() => {
    if (item) {
      setVerifyItemShow(true)
    }
  }, [item])

  const deleteItem = async () => {
    try {
      await api.delete(`/tarefas/${props.id}`)
      load()
      toast.success("A tarefa foi deletada!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } catch (e) {
      console.log("Erro ao deletar")
    }
  }
  const checkItem = async () => {
    try {
      await api.put(`/tarefas/${props.id}`, { ...props, status: 1 })
      load()
      toast.success("A tarefa foi marcada como finalizada!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } catch (e) {
      console.log("Erro ao marcar a tarefa como finalizada")
    }
  }

  return (
    <Menu>
      {!props.status && props.user_id == profile.id && (
        <Item className="check" onClick={checkItem}>
          <i className="ri-check-double-line"></i>
        </Item>
      )}
      {!verifyItemShow && (
        <Link to={{ pathname: `/tarefas?item=${props.id}` }}>
          <Item className="show">
            <i className="ri-eye-line"></i>
          </Item>
        </Link>
      )}
      {!props.status && props.user_id == profile.id && (
        <Link to={{ pathname: `/tarefas/${props.id}` }}>
          <Item className="edit">
            <i className="ri-pencil-line"></i>
          </Item>
        </Link>
      )}
      {props.user_id == profile.id && (
        <Item onClick={deleteItem} className="delete">
          <i className="ri-delete-bin-line"></i>
        </Item>
      )}
    </Menu>
  )
}

export { TaskMenu }
