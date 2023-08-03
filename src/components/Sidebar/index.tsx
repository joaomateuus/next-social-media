import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className='flex flex-col items-center justify-start h-screen w-96 bg-white rounded-md'>
      <div className="flex justify-center border-b border-blue-300 w-3/5">
        <img src="http://www.clker.com/cliparts/4/O/N/0/s/p/blue-logo-flame-md.png" className="h-36 w-24 mb-2" alt="" />
      </div>
      <div className="w-80 p-6">
        <input placeholder="Search" 
          className="w-full h-12 rounded-md bg-gray-300 outline-none pl-4" type="text" />
      </div>
      <ul className="flex flex-col items-center w-full p-6">
        <li className="text-xl mb-2 text-blue-300">Feed</li>
        <li className="text-xl mb-2">My Profile</li>
        <li className="text-xl mb-2">Messages</li>
        <li className="text-xl mb-2">Settings</li>
      </ul>
    </div>
  )
}