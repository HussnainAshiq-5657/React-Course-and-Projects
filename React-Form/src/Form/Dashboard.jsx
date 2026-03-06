import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    toast.success('Logged Out');
    navigate('/login');
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center mt-20 bg-gray-100 p-5">
        <h1 className="font-bold text-3xl">Dashboard (Protected)</h1>
        <button
          onClick={handleLogout}
          className="bg-blue-500 px-4 py-2 rounded-2xl text-white cursor-pointer"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Dashboard;
