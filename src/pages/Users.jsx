import Table from '../components/Table';
import { useNavigate } from 'react-router-dom';
function Users() {
  const navigate=useNavigate();
  return (
    <>
    <div className='px-2 font-bold text-lg py-2 min-h-12 bg-background'>
        <p className='ml-10'>User Data Table </p>
    </div>
    <div className=''>
      <div className='flex justify-center'>
        <button className='bg-primary px-3 py-2 rounded' onClick={()=>navigate('/newuser')}>ADD USER +</button>
      </div>
      <div className='wrapper'>
          <Table />
      </div>
    </div>
    </>
  )
}
export default Users;
