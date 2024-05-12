import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>

      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=59&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>

        <img 
          src="https://avatars.githubusercontent.com/u/93687014?v=4"
          className={styles.avatar}
        />

        <strong>Seu Madruga</strong>
        <span>Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}