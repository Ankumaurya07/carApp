import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);

      // ✅ Store token
      localStorage.setItem('token', res.data.token);

      // ✅ Optionally store user info
      localStorage.setItem('user', JSON.stringify(res.data.user));

      setMessage('Login successful');
      setIsError(false);

      setTimeout(() => {
        navigate('/cars');
      }, 1000);
    } catch (err) {
      setIsError(true);
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600">Login</h2>

        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition duration-200"
        >
          Login
        </button>

        {message && (
          <p className={`text-center text-sm ${isError ? 'text-red-500' : 'text-green-600'}`}>
            {message}
          </p>
        )}

        <p className="text-center text-m text-gray-600">
          Don't have an account?{' '}
          <span
            className="text-indigo-600 hover:underline cursor-pointer"
            onClick={() => navigate('/register')}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
