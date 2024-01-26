import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateUser = () => {

    const params = useParams();

    

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
       
        fetch('http://localhost:4000/'+ params.id,{
            method: 'GET'
        })
        .then(res=> res.json())
        .then(result=> {
            setName(()=> result.data.result.name);
            setEmail(()=> result.data.result.email);
            setAge(()=> result.data.result.age);
        })
        .catch(err=> console.log(err))
        
    }, []);


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

        fetch('http://localhost:4000/'+ params.id, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(result => console.log(result))
            // .then(()=> dispatch(addUser(body)))
            .then(() => navigate('/'))
            .catch(err => console.log(err.message));

    }


    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update User</h2>

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
