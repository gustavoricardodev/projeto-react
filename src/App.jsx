import { Header } from './components/Header.jsx'
import { Posts } from './components/Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          <Posts
            author="Seu Madruga"
            content="lorem ipsum dolor sit amet"
          />

          <Posts
            author="Dona Florinda"
            content="lorem ipsum dolor sit amet"
          />

          <Posts
            author="Professor Girafales"
            content="lorem ipsum dolor sit amet"
          />

        </main>
      </div>
    </div>
  );
}

