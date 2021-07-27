import React from 'react';



export default function UserRow({user = {}, columns = []}){

	function renderData() {
		let columnsArr = [];
		columns.forEach(column => {
			if(column.visible) {
				const value = user[column.id];
				columnsArr.push(<td key={value}>{value}</td>)
			}
		})

		return columnsArr;
	}

	return (
		<tr>
			{renderData()}
		</tr>
	)
}