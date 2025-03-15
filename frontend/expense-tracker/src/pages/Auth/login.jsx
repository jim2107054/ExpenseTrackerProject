import React from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from './../../components/Inputs/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    //handle login form submission
    const handleLogin = async (e) => {};

    return (
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black ml-15">Welcome Back</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6 ml-15">Please enter your details to login.</p>

                <form onSubmit={handleLogin}>
                    <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email Address"
                    type="email"
                    placeholder="example@gmail.com"
                    />

                   <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    type="password"
                    placeholder="minimum 6 characters"
                    />

                <button type='submit' className="btn-primary">
                  Login
                </button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default login;