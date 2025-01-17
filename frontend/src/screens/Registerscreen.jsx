import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Succes';
// import axios from 'Axios';

const Register = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [succes, setsuccess] = useState(false);

    async function register() {
        if (password == cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword,
            };
            try {
                setLoading(true);
                // const result = await axios.post('http://localhost:5000/api/users/register', user).data
                const response = await fetch(
                    'http://localhost:5000/api/users/register',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(user),
                    }
                );
                console.log(response);

                if (response.ok) {
                    const result = await response.json();
                    console.log(result);

                    setLoading(false);
                    setsuccess(true);
                }

                setname('');
                setemail('');
                setpassword('');
                setcpassword('');
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Passwords not matched');
        }
    }

    return (
        <div>
            {loading && <Loader />}
            {error && <Error />}

            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    {succes && <Success message="Sikeres regisztráció" />}

                    <div className="bs">
                        <h2>Regisztráció</h2>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="name"
                            value={name}
                            onChange={(e) => {
                                setname(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="email"
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="password"
                            value={password}
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="confirm password"
                            value={cpassword}
                            onChange={(e) => {
                                setcpassword(e.target.value);
                            }}
                        />

                        <br />

                        <button
                            className="btn btn-primary"
                            onClick={register}
                        >
                            Register{' '}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
