import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import UserSideBar from '../sences/Global/UserSideBar';
import TopBar from '../sences/Global/TopBar';
import { Route, Routes } from 'react-router-dom';
import SaleVoucher from '../sences/UserSpace/Sale';
import PawnVoucher from '../sences/UserSpace/Pawn';
import SaleReport from '../sences/UserSpace/SaleReport';
import PawnReport from '../sences/UserSpace/PawnReport';

const UserHome = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="Home" >
          <UserSideBar />
          <main className="Content">
            <TopBar/>
            <Routes>
              <Route path='/' element={<SaleVoucher/>} />
              <Route path='/pawn' element={<PawnVoucher/>} />
              <Route path='/report/sale' element={<SaleReport/>} />
              <Route path='/report/pawn' element={<PawnReport/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default UserHome