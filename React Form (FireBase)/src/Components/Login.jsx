import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase.js';
import { toast } from 'react-toastify';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  async function handleSignUp(event) {
    event.preventDefault();
    console.log('Form Submitted:', { email, password });

    if (!email || !password) {
      toast.error('All Field are Required.');
      return;
    } else if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a Valid Email Address.');
      return;
    }

    try {
      setPending(true);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login SuccessFully.');
      navigate('/dashboard');
      setEmail('');
      setPassword('');
      return;
    } catch (error) {
      toast.error('Failed to Login.', error.message);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-20 p-10 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSignUp} className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-center text-blue-700 ">
            Login to Your Account
          </h1>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full outline-1 outline-blue-400 focus:ring-3 rounded-lg focus:ring-blue-500 px-4 py-2"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full outline-1 outline-blue-400 focus:ring-3 rounded-lg focus:ring-blue-500 px-4 py-2"
          />
          <button className="cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-semibold">
            {pending ? 'Logging in...' : 'Login'}
          </button>
          <div className="flex justify-center items-center gap-2">
            <p>
              Didn't have an Account ?{' '}
              <span
                onClick={() => navigate('/')}
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
              >
                SignUp
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
