import React,{useState} from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

function Input({ label, type, placeholder, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () =>{
    setShowPassword(!showPassword);
  }
  return (
    <div className='ml-13'>
      <label className="text-[13px] font-semibold text-slate-800">{label}</label>

      <div className="input-box">
        <input
          type={type === 'password' ? showPassword ? 'text' : 'password' : type}
          placeholder={placeholder}
          className='w-full bg-transparent outline-none'
          value={value}
          onChange={(e)=>onChange(e)}
        />

        {type === 'password' && (
          <>
          {
            showPassword ?(
              <FaRegEye 
              size={18}
              className='text-primary cursor-pointer'
              onClick={()=>toggleShowPassword()}
              />
            ):(
              <FaRegEyeSlash 
              size={18}
              className='text-primary cursor-pointer'
              onClick={()=>toggleShowPassword()}
              />
            )
          }
          </>
        )}
      </div>
    </div>
  )
}

export default Input