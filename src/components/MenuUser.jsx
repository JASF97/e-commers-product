import React, { useState } from 'react'

import user from '../images/image-avatar.png'
import '../styles/MenuUser.css'

const MenuUser = () => {
	const [toggleUser, setToggleUser] = useState(false)

	return (
		<div className="MenuUser">
			<div className="container-user--icon">
                <img src={user} alt="Shopping logo" onClick={() => {setToggleUser(!toggleUser)}} /> 
            </div>
			{toggleUser && (
				<ul>
					<li>
						<a href="/" className="title">My account</a>
					</li>
					<li>
						<a href="/">My orders</a>
					</li>
					<li>
						<a href="/" className="sign-out">Sign out</a>
					</li>
				</ul>
			)}
			
		</div>
	)
}

export default MenuUser