import './App.css'
import About from './views/About'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
    </div>
  )
}

export default App
