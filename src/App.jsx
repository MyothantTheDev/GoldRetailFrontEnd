import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginForm from './components/sences/Auth'
import AdminHome from './components/Home/AdminHome'

function App() {

  return (
    <>
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' Component={LoginForm}/>
          <Route path='/account' >
            <Route path='admin/*' Component={AdminHome} />
          </Route>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
