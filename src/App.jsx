import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginForm from './components/sences/Auth'

function App() {

  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={LoginForm}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
