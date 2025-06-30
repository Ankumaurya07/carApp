import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

const Register = () => {
  const [step, setStep] = useState(1); // 1 = Form, 2 = OTP
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      try {
        const res = await API.post('/auth/register', form); // sends OTP too
        setMessage(res.data.message || 'OTP sent to email');
        setStep(2); // move to OTP input
      } catch (err) {
        setMessage(err.response?.data?.message || 'Registration failed');
      }
    } else {
      try {
        const res = await API.post('/auth/verify', {
          email: form.email,
          otp,
        });

        setMessage(res.data.message || 'Account verified!');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } catch (err) {
        setMessage(err.response?.data?.message || 'Invalid OTP');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700">
          {step === 1 ? 'Create an Account' : 'Verify Email'}
        </h2>

        {step === 1 ? (
          <>
            <input
              name="name"
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </>
        ) : (
          <input
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP sent to email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition duration-200"
        >
          {step === 1 ? 'Register & Send OTP' : 'Verify OTP'}
        </button>

        {message && (
          <p className="text-center text-sm text-green-600 font-medium">
            {message}
          </p>
        )}

        {step === 1 && (
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <span
              className="text-indigo-600 hover:underline cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
