import { useState } from 'react';

function useForm(initialValues = {}, callback) {
  const [values, setValues] = useState(initialValues);

  const handleValues = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (callback) callback(values);
  };
  const resetForm = () => {
    setValues(initialValues);
  };
  return { values, handleValues, handleSubmit, resetForm };
}
export default useForm;
