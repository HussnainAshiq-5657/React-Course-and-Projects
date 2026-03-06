import Form from './Form';
function FormStatus() {
  async function handleSubmit() {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    });
    console.log('Submit');
  }
  return (
    <>
      <form action={handleSubmit}>
        <Form />
      </form>
    </>
  );
}

export default FormStatus;
