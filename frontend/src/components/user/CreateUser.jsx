import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/userSlice';

const CreateUser = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !age) return;

        // console.log(name, email, age);

        const body = {
            name,
            email,
            age: Number(age),
            action: 'action'
        }

        fetch('http://localhost:4000/', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(result => console.log(result))
            .then(()=> dispatch(addUser(body)))
            .then(() => navigate('/'))
            .catch(err => console.log(err.message));

    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>

                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type="text"
                            placeholder='Enter Name'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(() => e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type="text"
                            placeholder='Enter Email'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(() => e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Age</label>
                        <input type="number"
                            placeholder='Enter Age'
                            className='form-control'
                            value={age}
                            onChange={(e) => setAge(() => e.target.value)}
                        />
                    </div>

                    <button className='btn btn-success'>
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}

export default CreateUser