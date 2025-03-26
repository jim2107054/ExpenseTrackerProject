import React from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from './../../components/Inputs/Input';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    //handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();

        //check if email and password are empty
        if(!validateEmail(email)){
            return setError('Please enter a valid email address');
        }
        if(!password){
            return setError('Password is required');
        }

        setError("");

        //Login API call.
    };

    return (
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black ">Welcome Back</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6 ">Please enter your details to login.</p>

                <form onSubmit={handleLogin}>
                    {/* using props we pass the value, onChange, label, type and placeholder to the Input component. */}
                    <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email Address"
                    type="email"
                    placeholder="jim@gmail.com"
                    />

                   <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    type="password"
                    placeholder="minimum 6 characters"
                    />

                    {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

                <button type='submit' className="btn-primary">
                  Login
                </button>

                <p className='text-[13px] text-slate-800 mt-3'>
                    Don't have an account?{" "}
                    <Link className='font-medium text-primary underline' to='/signup'>
                        SignUp
                    </Link>
                </p>

                </form>
            </div>
        </AuthLayout>
    );
};

export default login;