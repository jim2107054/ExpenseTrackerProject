import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "./../../components/Inputs/Input";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";

const signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //handle signup form submission
  const handleSignUp = async (e) => {};
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-2xl font-semiboid text-black">Create an Account</h3>
        <p className="text-md text-slate-700 mt-[5px] mb-6">
          Join us by entering your details below.
        </p>

        <form onSubmit={handleSignUp} action="">

            <ProfilePhotoSecector image={profilePic} setImage={setProfilePic}/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              label="Full Name"
              placeholder="Jim"
              type="text"
            />

            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              type="email"
              placeholder="jim@gmail.com"
            />

            <div className="col-span-2">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              placeholder="minimum 6 characters"
            />
            </div>

          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default signup;
