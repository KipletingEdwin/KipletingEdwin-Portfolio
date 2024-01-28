import styles from './App.module.css'
import About from './components/About/About'
import Description from './components/Description/Description'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Description />
      <About />
    </div>
    
  )
}

export default App
