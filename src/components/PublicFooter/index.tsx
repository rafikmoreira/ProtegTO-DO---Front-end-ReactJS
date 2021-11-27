import coffeIcon from "../../assets/img/coffe.png"
import { PublicFooterWrapper } from "./styles"

const PublicFooter = () => {
  return (
    <PublicFooterWrapper>
      <img src={coffeIcon} />
      <p>Todos os direitos reservados</p>
    </PublicFooterWrapper>
  )
}

export { PublicFooter }
