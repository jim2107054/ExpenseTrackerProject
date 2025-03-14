import React from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';

const login = () => {
    return (
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black ml-15">Welcome Back</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6 ml-15">Please enter your details to login.</p>
            </div>
        </AuthLayout>
    );
};

export default login;