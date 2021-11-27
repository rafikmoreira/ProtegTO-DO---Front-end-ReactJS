import { Header } from "../../components/Header"
import { MenuFooter } from "../../components/MenuFooter"
import { TaskForm } from "../../components/TaskForm"
import { UserInfo } from "../../components/UserInfo"
import { TarefaCadastroWrapper } from "./styled"

const TarefaCadastro = () => {
  return (
    <TarefaCadastroWrapper>
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
        <TaskForm />
      </div>
      <MenuFooter />
    </TarefaCadastroWrapper>
  )
}

export { TarefaCadastro }
