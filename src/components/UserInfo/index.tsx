import { UserInfoWrapper, Flexbox } from "./styles"
import defaultProfileImage from "../../assets/img/perfil_padrao.png"
import { useContext } from "react"
import { AuthContext } from "../../context/auth"

const UserInfo = () => {
  const { profile, token, setUser } = useContext(AuthContext)

  const clear = () => {
    setUser({ token: "", profile: { nome: "", email: "" } })
    localStorage.removeItem("@protegotodo-token")
  }

  return (
    <UserInfoWrapper>
      <Flexbox>
        <img src={defaultProfileImage} />
        <p>
          Seja bem-vindo,
          <br />
          <strong>{profile.nome ? profile.nome : "visitante"}</strong>
          <div>
            {token ? (
              <span
                onClick={clear}
                style={{ cursor: "pointer", marginTop: "10px" }}
              >
                <i className="ri-logout-box-line"></i>
              </span>
            ) : (
              ""
            )}
          </div>
        </p>
      </Flexbox>
    </UserInfoWrapper>
  )
}

export { UserInfo }
