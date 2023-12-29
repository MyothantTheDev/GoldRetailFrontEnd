import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS,
LOAD_USER_FAIL, LOAD_USER_SUCCESS, LOAD_USER_REQUEST,
LOGOUT_SUCCESS, LOGOUT_FAIL } from '../Constants/userConstants';
import { mockUsers } from '../Data/mockdata';

//Login
export const login = (email, password) => async (dispatch) => {
	try {
			dispatch({ type: LOGIN_REQUEST })
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}
			// const { data } = await axios.post('api/v1/login', { email, password, device }, config)
			dispatch({
				type: LOGIN_SUCCESS,
				payload: mockUsers.user
			})
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response.data.message
		})
	}
}

//Logout
export const logout = () => async (dispatch) => {
	try {
		// await axios.get('/api/v1/logout');
		dispatch({
			type: LOGOUT_SUCCESS,
		})
	} catch (error) {
		dispatch({
			type: LOGOUT_FAIL,
			payload: error.response.data.message
		})
	}
}

//Load User
export const loadUser = (userData) => async (dispatch) => {
	try {
			dispatch({ type: LOAD_USER_REQUEST })

			// const { data } = await axios.get('api/v1/me')
			
			dispatch({
				type: LOAD_USER_SUCCESS,
				payload: mockUsers.user
			})
	} catch (error) {
		dispatch({
			type: LOAD_USER_FAIL,
			payload: error.response.data.message
		})
	}
}

//CLEAR_ERRORS
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS
	})
}