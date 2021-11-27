import { Button } from "../../styles/button"
import { Container } from "../../styles/container"
import { Input } from "../../styles/input"
import { convertPxToRem } from "../../util/conversao"
import { useState, useEffect } from "react"
import { TextArea } from "../../styles/Textarea"
import { toast } from "react-toastify"
import { api } from "../../api"

type TaskType = {
  titulo?: string
  descricao?: string
  id?: number
  status?: number
  visibilidade?: number
  user_id?: number
}

const TaskForm = (props: TaskType) => {
  const [taskData, setTaskData] = useState<TaskType>({
    titulo: "",
    descricao: "",
    id: 0,
    user_id: 0,
    visibilidade: 0,
    status: 0,
  })

  const setData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault()
    let payload = {
      [event.target.name]: event.target.value,
    }
    setTaskData((e) => {
      return { ...e, ...payload }
    })
  }

  useEffect(() => {
    setTaskData({ ...props })
  }, [])

  const update = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    try {
      const { data } = await api.put(`/tarefas/${taskData.id}`, { ...taskData })
      toast.success("Tarefa atualizada!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setTaskData(data)
    } catch (e) {
      toast.error("Não foi possível atualizar!", {
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

  const create = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    try {
      const { data } = await api.post(`/tarefas`, {
        ...taskData,
      })
      toast.success("Tarefa cadastrada!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setTaskData(data)
    } catch (e) {
      toast.error("Não foi possível cadastrar!", {
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
    <div>
      <Container>
        <form onSubmit={taskData.id ? update : create}>
          <Input
            onChange={setData}
            type="text"
            placeholder="Informe o título"
            name="titulo"
            defaultValue={taskData.titulo}
          />
          <TextArea
            style={{ resize: "none" }}
            placeholder="Descreva a tarefa"
            onChange={setData}
            name="descricao"
            defaultValue={taskData.descricao}
            rows={10}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div>
              <label htmlFor="visibilidadePublica">Pública</label>
              <input
                onChange={setData}
                type="radio"
                name="visibilidade"
                value={0}
                defaultChecked={taskData.visibilidade == 0 ? true : false}
                id="visibilidadePublica"
              />
              <label htmlFor="visibilidadePrivada">Privada</label>
              <input
                onChange={setData}
                type="radio"
                name="visibilidade"
                value={1}
                id="visibilidadePrivada"
                defaultChecked={taskData.visibilidade == 1 ? true : false}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: convertPxToRem(20),
            }}
          >
            {taskData.id ? (
              <Button type="submit" className="edit">
                Atualizar
              </Button>
            ) : (
              <Button type="submit" className="error">
                Cadastrar
              </Button>
            )}
          </div>
        </form>
      </Container>
    </div>
  )
}

export { TaskForm }
