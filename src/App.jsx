import { Header } from './components/Header.jsx'
import { Posts } from './Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import './global.css'
import styles from './App.module.css'

export function App() {
  return(
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          <Posts 
            author="Gustavo Ricardo" 
            content="lorem ipsum dolor sit amet"
          />

          <Posts 
            author="Yasmim Novais" 
            content="lorem ipsum dolor sit amet"
          />

        </main>
      </div>
    </div>
  );
}

