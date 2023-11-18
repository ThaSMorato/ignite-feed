import Avatar from "./Avatar";
import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1700086196666-b20449181ed2?q=40&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/ThaSMorato.png" />
        <strong>Thales Morato</strong>
        <span>FS Developer</span>
      </div>

      <footer>
        <a rel="stylesheet" href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
   )
}

export default Sidebar;
