import React, {useState} from 'react';

const SERVER_URL = 'http://localhost:4005';

export default function AddUserModal() {

	const [form, setForm] = useState({
		name: '',
		status: '',
		address: ''
	})

	function postUserToServer () {
		// fetch(SERVER_URL, {
		// 	method: 'POST', // *GET, POST, PUT, DELETE, etc.
		// 	mode: 'cors', // no-cors, *cors, same-origin
		// 	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		// 	credentials: 'same-origin', // include, *same-origin, omit
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 		// 'Content-Type': 'application/x-www-form-urlencoded',
		// 	},
		// 	redirect: 'follow', // manual, *follow, error
		// 	referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		// 	body: JSON.stringify(data) // body data type must match "Content-Type" header
		// });
	}

	function createNewUser() {

	}

	return (
		<div className="modal-fallback">
			<div id="add-user-modal">
				<h1>Add New User</h1>
				<input placeholder="name" value={form.name}/>
				<input placeholder="status" value={form.status}/>
				<input placeholder="address" value={form.address}/>
				<button onClick={() => createNewUser()}>
					Ok
				</button>
			</div>
		</div>
	)
}