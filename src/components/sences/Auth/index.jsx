import './LoginForm.css'
import React from "react"
import { FaUser } from '@react-icons/all-files/fa/FaUser'
import { IoMdLock } from '@react-icons/all-files/io/IoMdLock'

const LoginForm = () => {
	return (
		<>
			<div className="LoginForm">
				<div className="wrapper">
					<form action="">
						<h1>Login</h1>
						<div className="input-box">
							<input type="text" placeholder="Username" required/>
							<FaUser className="icon" />
						</div>
						<div className="input-box">
							<input type="password" placeholder="Password" required/>
							<IoMdLock className="icon" />
						</div>

						<div className="remember">
							<label >
								<input type="checkbox" required/>Remember me
							</label>
						</div>

						<button type="submit">Login</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default LoginForm