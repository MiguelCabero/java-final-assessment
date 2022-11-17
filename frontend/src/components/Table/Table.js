import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './Table.component.css';
import { FaTrash } from 'react-icons/fa';

function Table() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (users.length == 0) {
			getUsers();
		}
	});

	function getUsers() {
		axios
			.get('http://localhost:8080/api/users', {
				headers: {
					Accept: 'application/json',
				},
			})
			.then((response) => {
				setUsers(response.data);
				console.log(response.data);
			});
	}

	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>FIRST NAME</th>
					<th>LAST NAME</th>
					<th>PHONE NUMBER</th>
					<th>EMAIL</th>
					<th>DELETE USER</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => (
					<tr key={index}>
						<td>{user.id}</td>
						<td>{user.firstName}</td>
						<td>{user.lastName}</td>
						<td>{user.phoneNumber}</td>
						<td>{user.email}</td>
						<td>
							<FaTrash />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
