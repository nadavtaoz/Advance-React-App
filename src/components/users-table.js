import React, {useState} from 'react';
import UserRow from "./user-row";


export default function UsersTable(props) {

	const [columns, setColumns] = useState(props.columns);
	const [users, setUsers] = useState(props.users);

	/**
	 * Toggle column visibility
	 * @param name
	 */
	const toggleColumn = (name) => {
		const columnsForUpdate = columns.map(column => {
			if(column.name === name) {
				column.visible = !column.visible;
			}
			return column;
		})

		setColumns(columnsForUpdate);
	}

	function renderRows() {
		return users.map(user => <UserRow columns={columns} user={user} key={user.id}/>)
	}

	/**
	 * Render all columns button
	 * @returns {*}
	 */
	function renderColumnButtons() {
		return columns.map(column => {
			return (
				<div className="column-button-container" key={column.name}>
					<input type="checkbox" checked={column.visible} onChange={() => toggleColumn(column.name)} value={column.name} name={column.name}/>
					<h5 className="checkbox-label">{column.name}{column.visible} </h5>
				</div>
			)
		});
	}

	/**
	 * Render all columns
	 * @returns {*}
	 */
	function renderColumns() {
		return columns.map(column => column.visible && <th key={column.name}>{column.name}</th>);
	}

	return (

		<div id="users-table-container">
			<div className="users-columns-buttons">
				{renderColumnButtons()}
			</div>
			<table className="users-table">
				<thead>
					<tr>
						{renderColumns()}
					</tr>
				</thead>
				<tbody>
					{renderRows()}
				</tbody>
			</table>
		</div>
	)
}