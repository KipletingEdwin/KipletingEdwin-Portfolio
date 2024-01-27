import styles from './App.module.css'
import Description from './components/Description/Description'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Description />
    </div>
    
  )
}

export default App
