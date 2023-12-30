import { Box, IconButton, useTheme } from '@mui/material';
import { useContext, useEffect } from 'react';
import { ColorModeContext, tokens } from '../../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Actions/userActions';
import { Navigate } from 'react-router-dom';

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector(state => state.auth);
  const logoutHandler = () => {
    dispatch(logout());
  }

//   useEffect( () => {
//     if (!isAuthenticated) {
//       <Navigate to='/' />
//     }
//   })

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
      </Box>
      <Box display='flex'>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon/>
          ) : <LightModeOutlinedIcon/> }
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon/>
        </IconButton>
        <IconButton>
          <PowerSettingsNewOutlinedIcon onClick={logoutHandler} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar;