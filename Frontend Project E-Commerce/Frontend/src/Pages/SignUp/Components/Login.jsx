import { useActionState } from 'react';
import SideImage from '../../../assets/Side Image.png';
import Google from '../../../assets/Icon-Google.png';
import { NavLink } from 'react-router';

function LoginForm() {
  async function handleLogin(formData) {
    const emailOrPhone = formData.get('emailOrPhone');
    const password = formData.get('password');

    const errors = {};

    if (!emailOrPhone || emailOrPhone.trim() === '') {
      errors.emailOrPhone = 'Email or Phone is required';
    } else if (!/^\S+@\S+\.\S+$/.test(emailOrPhone) && !/^\d{10,15}$/.test(emailOrPhone)) {
      errors.emailOrPhone = 'Enter valid email or phone number';
    }

    if (!password || password.trim() === '') {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    alert('Login Successful 🎉');

    return { errors: {} };
  }

  const [state, formAction, isPending] = useActionState(handleLogin, {
    errors: {},
  });

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-12 px-4 lg:px-0 gap-10">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={SideImage}
          alt="Picture of MobilePhone with Shopping Cart"
          className="rounded w-3/4 lg:w-full"
        />
      </div>

      <div className="w-full lg:w-1/2 max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">Log In to Exclusive</h1>
        <p className="text-lg text-gray-500 mb-6 text-center lg:text-left">
          Enter your details below
        </p>

        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone Number"
              className={`border-b-2 px-2 py-2 w-full outline-none ${
                state.errors.emailOrPhone ? 'border-red-500' : 'border-gray-400'
              }`}
            />
            {state.errors.emailOrPhone && (
              <p className="text-red-500 text-sm mt-1">{state.errors.emailOrPhone}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`border-b-2 px-2 py-2 w-full outline-none ${
                state.errors.password ? 'border-red-500' : 'border-gray-400'
              }`}
            />
            {state.errors.password && (
              <p className="text-red-500 text-sm mt-1">{state.errors.password}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <button
              type="submit"
              disabled={isPending}
              className="bg-danger text-white px-4 py-2 rounded-xl w-full sm:w-auto hover:bg-red-600 transition duration-300"
            >
              {isPending ? 'Logging In...' : 'Log In'}
            </button>

            <p className="text-red-500 cursor-pointer hover:underline text-center sm:text-left">
              Forgot Password?
            </p>
          </div>

          <p className="text-center text-red-700">
            Don't have an Account?{' '}
            <NavLink to="/signUp" className="text-blue-500 hover:underline">
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
