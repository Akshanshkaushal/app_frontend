import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    Phone_no: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, Phone_no } = user;

    try {
      const res = await fetch('https://techsnap-pe2v.onrender.com/accounts/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password,
          Phone_no: String(Phone_no)
        })
      });

      const data = await res.json();

      console.log('Server response:', data);
      console.log('Response Headers:', res.headers);
      
     

      if (res.status === 422 || !data) {
        console.error('Registration failed. Retry.');
        window.alert('Registration failed. Retry.');
        navigate('/login'); 
      }
      else if (res.status === 409) {
        console.log('User already exists. Redirecting to login.');
        window.alert('User already exists. Please login.');
        navigate('/login');
      }
      else if (res.status === 200) {
        localStorage.setItem('jwttoken',data.token)
        navigate('/home');
        console.log('Registration success');
        window.alert('Registration success');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      window.alert('Error during registration. Please try again later.');
    }
  };

  return (
    <>
          <div className="min-h-screen flex flex-col max-w-md mx-auto bg-gelap opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center" >
      <div className="px-6 pt-56">
      </div>
      <div className="px-6 pt-4 flex flex-col w-full space-y-4">
        <div className="flex flex-col w-full space-y-1">
          <label className="text-md font-semibold text-white">Username</label>
          <div className="w-full flex h-10 rounded border-2 border-yellow-300 bg-abu-5">
            <div className="w-2/12 h-full rounded-l-lg  flex items-center">
              <svg width="20" height="20" className="text-gray-200 mx-auto" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99996 1.66666C5.41663 1.66666 1.66663 5.41666 1.66663 10C1.66663 14.5833 5.41663 18.3333 9.99996 18.3333C11.5 18.3333 12.9166 17.9167 14.1666 17.25C14.5833 17 14.6666 16.5 14.5 16.0833C14.25 15.6667 13.75 15.5833 13.3333 15.75C10.1666 17.5833 6.08329 16.5 4.24996 13.3333C2.41663 10.1667 3.49996 6.08333 6.66663 4.25C9.83329 2.41666 13.9166 3.5 15.75 6.66666C16.3333 7.66666 16.6666 8.83333 16.6666 10V10.6667C16.6666 11.5 16 12.1667 15.1666 12.1667C14.3333 12.1667 13.6666 11.5 13.6666 10.6667V7.08333C13.6666 6.58333 13.3333 6.25 12.8333 6.25C12.4166 6.25 12.0833 6.5 12 6.91666C10.3333 5.75 7.91663 6.16666 6.74996 7.83333C5.58329 9.5 5.99996 11.9167 7.66663 13.0833C9.24996 14.1667 11.3333 13.9167 12.5833 12.5C13.6666 13.8333 15.5833 14.0833 16.9166 13.0833C17.6666 12.5 18.1666 11.5833 18.1666 10.5833V10C18.3333 5.41666 14.5833 1.66666 9.99996 1.66666ZM9.99996 12.0833C8.83329 12.0833 7.91663 11.1667 7.91663 10C7.91663 8.83333 8.83329 7.91666 9.99996 7.91666C11.1666 7.91666 12.0833 8.83333 12.0833 10C12.0833 11.1667 11.1666 12.0833 9.99996 12.0833Z"/>
              </svg>
            </div>
            <div className="w-10/12 rounded-r-xl">
              <input
                type="text"
                className="w-full h-full rounded-r flex items-center px-1 focus:outline-none"
                placeholder="Enter your username"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-1">
          <label className="text-md font-semibold text-white">Email</label>
          <div className="w-full flex h-10 rounded border-2 border-yellow-300 bg-abu-5">
            <div className="w-2/12 h-full rounded-l-lg  flex items-center">
              <svg width="20" height="20" className="text-gray-200 mx-auto" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99996 1.66666C5.41663 1.66666 1.66663 5.41666 1.66663 10C1.66663 14.5833 5.41663 18.3333 9.99996 18.3333C11.5 18.3333 12.9166 17.9167 14.1666 17.25C14.5833 17 14.6666 16.5 14.5 16.0833C14.25 15.6667 13.75 15.5833 13.3333 15.75C10.1666 17.5833 6.08329 16.5 4.24996 13.3333C2.41663 10.1667 3.49996 6.08333 6.66663 4.25C9.83329 2.41666 13.9166 3.5 15.75 6.66666C16.3333 7.66666 16.6666 8.83333 16.6666 10V10.6667C16.6666 11.5 16 12.1667 15.1666 12.1667C14.3333 12.1667 13.6666 11.5 13.6666 10.6667V7.08333C13.6666 6.58333 13.3333 6.25 12.8333 6.25C12.4166 6.25 12.0833 6.5 12 6.91666C10.3333 5.75 7.91663 6.16666 6.74996 7.83333C5.58329 9.5 5.99996 11.9167 7.66663 13.0833C9.24996 14.1667 11.3333 13.9167 12.5833 12.5C13.6666 13.8333 15.5833 14.0833 16.9166 13.0833C17.6666 12.5 18.1666 11.5833 18.1666 10.5833V10C18.3333 5.41666 14.5833 1.66666 9.99996 1.66666ZM9.99996 12.0833C8.83329 12.0833 7.91663 11.1667 7.91663 10C7.91663 8.83333 8.83329 7.91666 9.99996 7.91666C11.1666 7.91666 12.0833 8.83333 12.0833 10C12.0833 11.1667 11.1666 12.0833 9.99996 12.0833Z"/>
              </svg>
            </div>
            <div className="w-10/12 rounded-r-xl">
              <input
                type="text"
                className="w-full h-full rounded-r flex items-center px-1 focus:outline-none"
                placeholder="example@email.com"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-1">
          <label className="text-md font-semibold text-white">Mobile Number</label>
          <div className="w-full flex h-10 rounded border-2 border-yellow-300 bg-abu-5">
            <div className="w-2/12 h-full rounded-l-lg  flex items-center">
      
            </div>
            <div className="w-10/12 rounded-r-xl">
              <input
                type="text"
                className="w-full h-full rounded-r flex items-center px-1 focus:outline-none"
                placeholder="Enter your mobile number"
                name="Phone_no"
                value={user.Phone_no}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-1">
          <label className="text-md font-semibold text-white">Password</label>
          <div className="w-full flex h-10 rounded border-2 border-yellow-300 bg-abu-5">
            <div className="w-2/12 h-full rounded-l-lg  flex items-center">
              <svg className="text-gray-200 mx-auto" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"/>
              </svg>
            </div>
            <div className="w-10/12 rounded-r-xl">
              <input
                type="password"
                className="w-full h-full rounded-r flex items-center px-1 focus:outline-none"
                placeholder="**********"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="pt-6 w-full flex space-x-2 justify-between">
          <button onClick={handleSubmit} className="h-10 w-5/12 border-2 border-orange-700 rounded-lg text-white font-semibold">
            SignUp
          </button>
          <Link to="/login" className="h-10 w-5/12 bg-btn rounded-lg text-white text-center items-center py-2 font-semibold">
            Login
          </Link>
        </div>
      </div>
    </div>

    </>
  );
};

export default SignUp;