import { useActionState } from 'react';
import SideImage from '../../assets/Side Image.png';
import Google from '../../assets/Icon-Google.png';
import { NavLink } from 'react-router';

function SignUp() {
  // Action function (validation logic)
  async function handleSubmit(prevState, formData) {
    const name = formData.get('name');
    const emailOrPhone = formData.get('emailOrPhone');
    const password = formData.get('password');

    const errors = {};

    if (!name || name.trim() === '') {
      errors.name = 'Name is required';
    }

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

    // If errors exist → return errors
    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    // If no errors → success
    alert('Account Created Successfully 🎉');

    return { errors: {} };
  }

  // useActionState hook
  const [state, formAction, isPending] = useActionState(handleSubmit, {
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
        <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">Create an Account</h1>
        <p className="text-lg text-gray-500 mb-6 text-center lg:text-left">
          Enter your details below
        </p>

        {/* FORM */}
        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={`border-b-2 px-2 py-2 w-full outline-none ${
                state.errors.name ? 'border-red-500' : 'border-gray-400'
              }`}
            />
            {state.errors.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
          </div>

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

          <button
            type="submit"
            disabled={isPending}
            className="bg-danger w-full text-white px-4 py-2 rounded-xl hover:bg-red-600 transition duration-300"
          >
            {isPending ? 'Submitting...' : 'Create an Account'}
          </button>

          <button
            type="button"
            className="w-full flex gap-2 justify-center items-center px-4 py-2 rounded-xl border border-gray-400 hover:bg-gray-100 transition duration-300"
          >
            <img src={Google} alt="Google Icon" className="w-6 h-6" />
            <p>Sign up with Google</p>
          </button>

          <p className="text-center">
            Already have an Account?{' '}
            <NavLink to="/login" className="text-blue-500 hover:underline">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
