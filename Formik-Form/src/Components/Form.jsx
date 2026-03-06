import { Formik } from 'formik';
import * as yup from 'yup';

function Form() {
  return (
    <>
      <Formik
        initialValues={{
          fullname: '',
          password: '',
          gender: '',
          acceptTerms: false,
        }}
        validationSchema={yup.object({
          fullname: yup
            .string()
            .required('Name is Required')
            .min(3, 'Minimum Characters are 3')
            .max(12, 'Maximum Characters are 12'),
          password: yup
            .string()
            .required('Password is Required')
            .min(3, 'Minimum Characters are 3')
            .max(12, 'Maximum Characters are 12'),
          gender: yup.string().required('Please select your gender'),
          acceptTerms: yup.boolean().oneOf([true], 'You must accept terms & conditions'),
        })}
        onSubmit={(values) => {
          console.log(`Your Form Data ${JSON.stringify(values)}`);
          alert('Form Submitted');
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <div className="flex flex-col w-3/5 mx-auto p-5 gap-4 border-2 border-gray-100 shadow-2xs mt-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                  className={`w-full px-4 py-2 border outline-none rounded-lg placeholder-gray-400 transition
                 ${
                   touched.fullname && errors.fullname
                     ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                     : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                 }`}
                />
              </div>
              {touched.fullname && errors.fullname && (
                <div className="border-red-500 text-sm  text-red-500 mb-2">{errors.fullname}</div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={`w-full px-4 py-2 border outline-none  rounded-lg placeholder-gray-400 transition
                 ${
                   touched.password && errors.password
                     ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                     : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                 }`}
                />
              </div>
              {touched.password && errors.password && (
                <div className="border-red-500 text-sm text-red-500 mb-2">{errors.password}</div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Gender</label>

                <div className="flex items-center gap-6">
                  {/* Male */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.gender === 'male'}
                      className={`w-4 h-4 
          ${
            touched.gender && errors.gender
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
                    />
                    <span className="text-gray-700">Male</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.gender === 'female'}
                      className={`w-4 h-4 
          ${
            touched.gender && errors.gender
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          }`}
                    />
                    <span className="text-gray-700">Female</span>
                  </label>
                </div>
                {touched.gender && errors.gender && (
                  <p className="text-red-500 text-sm mt-2">{errors.gender}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.acceptTerms}
                    className={`w-4 h-4 rounded `}
                  />
                  <span className="text-gray-700">I accept Terms & Conditions</span>
                </label>

                {touched.acceptTerms && errors.acceptTerms && (
                  <p className="text-red-500 text-sm mt-2">{errors.acceptTerms}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2  rounded-2xl  cursor-pointer bg-blue-500 text-white"
              >
                Submit Form
              </button>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Form;
