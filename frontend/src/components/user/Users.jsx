import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';

import { deleteUser, getUsers } from '../../redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {

    const navigate = useNavigate();

    const users = useSelector(state => state.users.users);

    const dispatch = useDispatch();


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

        const getUsersData = async () => {

            try {

                setLoading(true);
                setError(() => '');

                const responce = await fetch('http://localhost:4000/');

                const result = await responce.json();



                dispatch(getUsers(result.data.result));

                setLoading(false);

            } catch (err) {
                setLoading(false);
                setError(() => err.message);
            }

        }

        getUsersData();


    }, []);

    const handleDelete = (id) => {
        fetch('http://localhost:4000/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .then(() => dispatch(deleteUser(id)))
            .catch(err => console.log(err));


    }


    if (error && !loading) return <h2>Can't fetch Users Data!</h2>

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>

            {loading ? <h2>Loading.....</h2> :
                <div className='w-50 bg-white rounded p-3'>
                    <Link to='/create' className='btn btn-success btn-sm'>
                        Add +
                    </Link>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {users.map(user => {
                            return (
                                <tbody key={user._id}>
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>{user.action}</td>
                                        <td>

                                            <Link to={`/edit/${user._id}`} className='btn btn-sm btn-success mx-1'>Update</Link>
                                            <button onClick={() => handleDelete(user._id)} className='btn btn-sm btn-danger'>Delete</button>

                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}

                    </table>

                </div>
            }

        </div>
    )
}

export default Users