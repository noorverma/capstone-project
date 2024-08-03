import Link from 'next/link'

const Header = () => {
  return (
    <nav className='bg-green-500 text-blue text-xl p-12 flex justify-between items-center'>
      <div className='font-bold text-white'>
        <label className=''>EmployeeSync</label>
      </div>
    </nav>
  );
};

export default Header;
