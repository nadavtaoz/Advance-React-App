import React, {useState, useContext} from 'react';
import TableContext from "../context/TableContext";

export default function UsersTableHeader() {

	const [showAddUserModal, setShowAddUserModal] = useState(false);
	const { state, dispatch } = useContext(TableContext);

	return (
		<>
			<div id="users-table-header">
				<input type="text" placeholder="Search Tables" className="users-table-header-search"/>

				<div className="users-table-header-buttons-container">
					<button className="change-status-button">
						Change Status
					</button>
					<button onClick={() => dispatch({type: 'open-user-modal'})} className="add-user-button">
						Add User
					</button>
				</div>
			</div>
		</>
	);

}