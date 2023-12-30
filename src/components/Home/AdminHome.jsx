import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import SideBar from '../sences/Global/SideBar';
import TopBar from '../sences/Global/TopBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../sences/Dashboard';
import NewUser from '../sences/Dashboard/NewUser';

const AdminHome = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="Home" >
          <SideBar />
          <main className="Content">
            <TopBar/>
            <Routes>
              <Route path='/' element={ <Dashboard /> }/>
              <Route path='/create' element={<NewUser />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default AdminHome