import Image from 'next/image';

export default function Main() {
  return (
    <div>
      <header className="bg-green-600 p-4 flex items-center">
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
          <span className="text-xl font-bold">DG</span>
        </div>
        <h1 className="text-white text-xl ml-4">Welcome Back, Dave</h1>
      </header>
      <main className="p-4 grid grid-cols-2 gap-4">
        <div className="text-center">
          <Image src="/images/punch.png" alt="Punch In/Out" width={150} height={150} />
          <p className="mt-2">Punch In/Out</p>
        </div>
        <div className="text-center">
          <Image src="/images/scheduling.png" alt="Scheduling" width={150} height={150} />
          <p className="mt-2">Scheduling</p>
        </div>
        <div className="text-center">
          <Image src="/images/performance.png" alt="Performance" width={150} height={150} />
          <p className="mt-2">Performance</p>
        </div>
        <div className="text-center">
          <Image src="/images/payroll.png" alt="Payroll" width={150} height={150} />
          <p className="mt-2">Payroll</p>
        </div>
      </main>
    </div>
  );
}