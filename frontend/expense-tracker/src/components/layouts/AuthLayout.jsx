import React from 'react'
import incomeExpense from '../../assets/images/income_expenses.png'

const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
        <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
            <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
            {children}
        </div>

        <div className="hidden md:block w-[50vw] h-screen bg-violet-300 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
            <div className="w-48 h-48 rounded-[40px] bg-blue-500 absolute -top-7 -left-5"></div>
            <div className="w-48 h-56 rounded-[40px] border-[20px] border-violet-600 absolute top-[25%] -right-10"></div>
            <div className="w-48 h-48 rounded-[40px] bg-blue-400 absolute -bottom-10 -left-5"></div>

            <img src={incomeExpense} className='w-64 lg:w-[90%] h-105 absolute bottom-12 rounded shadow-lg shadow-blue-400/15' alt="income-expense"
            />
        </div>
    </div>
  )
}

export default AuthLayout;