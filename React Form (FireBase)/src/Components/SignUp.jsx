import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { auth } from './Firebase.js';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('Form Submitted:', { name, email, password });
    if (!name || !email || !password) {
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
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Account Created SuccessFully.');
      navigate('/dashboard');
      setEmail('');
      setPassword('');
      setName('');
      return;
    } catch (error) {
      toast.error('Failed to Create Account.', error.message);
    } finally {
      setPending(false);
    }
  }
  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      setPending(true);
      await signInWithPopup(auth, provider);
      toast.success('Google SignUp Successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setPending(false);
    }
  }
  async function handleFacebookSignIn() {
    const provider = new FacebookAuthProvider();

    try {
      setPending(true);
      await signInWithPopup(auth, provider);
      toast.success('Facebook SignUp Successful 🎉');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-20 p-10 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-center text-blue-700">Create Your Account</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full outline-1 outline-blue-400 focus:ring-3 rounded-lg focus:ring-blue-500 px-4 py-2"
          />
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
          <button
            disabled={pending}
            className="cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-semibold"
          >
            {pending ? 'Signing Up...' : 'SignUp'}
          </button>
          <button
            onClick={handleGoogleSignIn}
            disabled={pending}
            className="cursor-pointer px-4 py-2 bg-gray-500 rounded-xl text-black font-semibold"
          >
            Continue With Google
          </button>
          <button
            onClick={handleFacebookSignIn}
            disabled={pending}
            className="cursor-pointer px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-xl text-white font-semibold"
          >
            Continue With Facebook
          </button>
          <div className="flex justify-center items-center gap-2">
            <p>
              Already have an Account ?{' '}
              <span
                onClick={() => navigate('/login')}
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
