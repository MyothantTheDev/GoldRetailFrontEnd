import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginForm from './components/sences/Auth'
import AdminHome from './components/Home/AdminHome'
import UserHome from './components/Home/UserHome'
import ProtectedRoute from './ProtectedRoute'

function App() {

  return (
    <>
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' Component={LoginForm}/>
          <Route path='/account' element={<ProtectedRoute/>} >
            <Route path='admin/*' Component={AdminHome} />
            <Route path='user/*' Component={UserHome} />
          </Route>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
