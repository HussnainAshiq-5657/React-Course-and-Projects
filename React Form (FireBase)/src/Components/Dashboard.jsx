import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router';
function Dashboard() {
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      await signOut(auth);
      toast.success('Logout SuccessFully');
      navigate('/login');
    } catch (error) {
      toast.error('Logout Failed');
    }
  }
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center bg-gray-300 p-5">
        <h1 className="text-2xl font-bold">DashBoard Component</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-200 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Dashboard;
