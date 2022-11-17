import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Table.component.css";
import { FaTrash, FaSync } from "react-icons/fa";

function Table() {
  const [users, setUsers] = useState([]);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  useEffect(() => {
    if (users.length == 0) {
      getUsers();
    }
  });

  function getUsers() {
    axios
      .get("http://localhost:8080/api/users", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      });
  }

  function handleDelete(event) {
    axios
      .delete(`http://localhost:8080/api/users/${event.currentTarget.value}`, {
        headers: {
          Accept: "applications/json",
        },
      })
      .then((response) => {
        getUsers();
      });
  }

  function handleUpdate(event) {
    axios
      .put(
        `http://localhost:8080/api/users/${event.currentTarget.value}`,
        {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          phoneNumber: phoneNumberRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        response.status == 200
          ? alert("User updated succesfully")
          : alert("Error updating the user");
      });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>UPDATE USER</th>
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
            <td>
              <button
                className="button"
                onClick={handleUpdate}
                value={user.id}
              >
                <FaSync />
              </button>
            </td>
            <td>{user.id}</td>
            <td>
              <input
                type="text"
                defaultValue={user.firstName}
                ref={firstNameRef}
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={user.lastName}
                ref={lastNameRef}
              />
            </td>
            <td>
              <input
                type="text"
                defaultValue={user.phoneNumber}
                ref={phoneNumberRef}
              />
            </td>
            <td>
              <input type="email" defaultValue={user.email} ref={emailRef} />
            </td>
            <td>
              <button
                className="button"
                onClick={handleDelete}
                value={user.id}
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
