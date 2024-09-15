import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // Handle signup logic here
  };

  const PasswordInput = ({ password, setPassword }) => {
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="password">Create a password</label>
        <div className="relative mt-2">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <p className="block text-gray-700">Use 8 or more characters with a mix of letters, numbers & symbols</p>
      </div>
    );
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg">


        <div className="w-full md:w-full flex flex-col py-5 px-10">
          <h1 className="text-3xl font-semibold text-center text-blue-600">Creat an account</h1>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account? <Link as={Link} to="/login" className="text-blue-600 font-semibold underline underline-offset-1 ">Log in</Link>
            </p>
          </div>
         

          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">What shoud we call you?</label>
              <input
                type="text"
                id="name"
                className="border mt-2 border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="enter your profile account"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">What is your Email?</label>
              <input
                type="email"
                id="email"
                className="border mt-2 border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
           
            <PasswordInput password={password} setPassword={setPassword} />

            

            <div className="flex justify-between mt-6">
              <div className="flex items-center mb-4">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-gray-600">I agree with all terms and privacy policy</label>
              </div>
              <a href="#" className="text-blue-600 text-sm mb-4 block text-right">Forget password?</a>
            </div>

            <button type="submit" className="bg-yellow-500 text-white font-bold py-2 rounded-lg w-full hover:bg-yellow-600 transition">Create an account</button>
          </form>

         

          <div className="mt-2">
            <div className="flex items-center ">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-600">Or continue with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex flex-col space-y-2 mt-3">
              <button className="border border-gray-300 rounded-lg py-2 flex items-center justify-center hover:bg-gray-100 transition">
                <div className="flex">
                  <span className="mr-2">
                    <img className="w-8 h-8 object-cover rounded-l-lg" src="/login/google.png" alt="Google" />
                  </span>
                  <p>Continue with Google</p>
                </div>
              </button>
              <button className="border border-gray-300 rounded-lg py-2 flex items-center justify-center hover:bg-gray-100 transition">
                <div className="flex">
                  <span className="ml-6">
                    <img className="w-7 h-7 object-cover rounded-l-lg" src="/login/fb.png" alt="Facebook" />
                  </span>
                  <p className="ml-2">Continue with Facebook</p>
                </div>
              </button>
              <button className="border border-gray-300 rounded-lg py-2 flex items-center justify-center hover:bg-gray-100 transition">
                <div className="flex">
                  <span className="mr-2">
                    <img className="w-8 h-8 object-cover rounded-l-lg" src="/login/apple.jpeg" alt="Apple" />
                  </span>
                  <p>Continue with Apple</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;