import { UserData } from "@/context";
import { useState } from "react";

interface LoginFormProps {
    onLoginSubmit: (data: UserData) => void;
}

export default function LoginForm({ onLoginSubmit }: LoginFormProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='flex flex-col items-center justify-start h-full w-full p-4'>
            <div className='flex flex-col justify-center items-start w-5/6'>
                <label className='text-xl'>
                    Username
                </label>
                <input 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className='w-full h-12 bg-gray-300 rounded-md outline-none p-4 mb-2' type="text" 
                />
            </div>
            <div className='flex flex-col justify-center items-start w-5/6'>
                    <label className='text-xl'>
                        Password
                    </label>
                    <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className='w-full h-12 bg-gray-300 rounded-md outline-none p-4 mb-2' type="password" />
                </div>
                <button onClick={() => onLoginSubmit({username, password})} className='mt-6 w-5/6 h-12 bg-blue-700 text-white rounded-md'>
                    Submit
                </button>
            </div>
    )


}