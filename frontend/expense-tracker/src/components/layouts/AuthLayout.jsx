import React from 'react'
import incomeExpense from '../../assets/images/income_expenses.png'
import { LuTrendingUpDown } from 'react-icons/lu';

const AuthLayout = ({children}) => {
  return (
    <div className='flex  gap-4'>
        <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
            <h2 className="text-2xl font-medium text-black -mb-30 ml-70 mt-20">Expense Tracker</h2>
            {children}
        </div>

        <div className="hidden md:block w-[50vw] h-screen bg-violet-500 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
            <div className="w-48 h-48 rounded-[40px] bg-blue-500 absolute -top-7 -left-5"></div>
            <div className="w-48 h-56 rounded-[40px] border-[20px] border-b-amber-700 absolute top-[25%] -right-10"></div>
            <div className="w-48 h-48 rounded-[40px] bg-blue-400 absolute -bottom-10 -left-5"></div>

            <div className="grid grid-cols-1 z-20">
              <StatsInfoCard
              icon={<LuTrendingUpDown/>}
              label='Track your income and expenses'
              value='2107054'
              color='bg-primary'
              />
            </div>
            <img src={incomeExpense} className='w-64 lg:w-[90%] h-105 absolute bottom-12 rounded shadow-lg shadow-blue-400/15' alt="income-expense"
            />
        </div>
    </div>
  )
}

export default AuthLayout;

const StatsInfoCard = ({icon, label, value, color}) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
      <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl ml-7`}>
        {icon}
      </div>
      <div>
        <h6 className="text-[15px] text-gray-600 text font-bold mb-1 ml-4">{label}</h6>
        <span className="text-[20px] text font-semibold ml-4">${value}</span>
      </div>
    </div>
  )
}