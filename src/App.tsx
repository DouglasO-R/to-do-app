import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import styles from "./styles/App.module.css";

function App() {

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Tasks />
      </div>
      
    </div>
  )
}

export default App
