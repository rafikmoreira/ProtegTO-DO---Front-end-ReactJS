import { NavLink } from "react-router-dom"
import { MenuFooterWrapper } from "./styles"

const MenuFooter = () => {
  return (
    <MenuFooterWrapper>
      <nav>
        <ul>
          <li>
            <NavLink to="/tarefas">
              <i className="ri-list-check"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tarefas/cadastro">
              <i className="ri-add-box-line"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </MenuFooterWrapper>
  )
}

export { MenuFooter }
