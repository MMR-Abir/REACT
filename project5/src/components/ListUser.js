import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ListUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost:80/php_api/user_list.php/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    return (
        <div>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}