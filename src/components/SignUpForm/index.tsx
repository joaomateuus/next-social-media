import { SignUpPayload } from "@/interfaces/SignUpPayload";
import { useState } from "react";

interface SignUpFormProps {
    onSignUpSubmit: (data: SignUpPayload) => void;
}

export default function SignUpForm({ onSignUpSubmit }: SignUpFormProps) {
    const [data, setData] = useState<SignUpPayload>({
        username: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    return (
        <div className='flex flex-col items-center justify-start h-full w-full p-4'>
                    <div className='flex flex-col justify-center items-start w-5/6'>
                        <label className='text-xl'>
                            Username
                        </label>
                        <input value={data.username} 
                            onChange={(e) => setData({...data, username: e.target.value})} 
                            className='w-full h-12 bg-gray-300 rounded-md outline-none p-4 mb-2' type="text" />
                    </div>

                    <div className='flex flex-col justify-center items-start w-5/6'>
                        <label className='text-xl'>
                            Name
                        </label>
                        <input value={data.name} 
                            onChange={(e) => setData({...data, name: e.target.value})} 
                            className='w-full h-12 bg-gray-300 rounded-md outline-none p-4 mb-2' type="text" />
                    </div>

                    <div className='flex flex-col justify-center items-start w-5/6'>
                        <label className='text-xl'>
                            Surname
                        </label>
                        <input value={data.surname} 
                            onChange={(e) => setData({...data, surname: e.target.value})} 
                            className='w-full h-12 bg-gray-300 rounded-md outline-none p-4 mb-2' type="text" />
                    </div>

                    <div className='flex flex-col justify-center items-start w-5/6'>
                        <label className='text-xl'>
                            Email
                        </label>
                        <input value={data.email} 
                            onChange={(e) => setData({...data, email: e.target.value})} 
                            className='w-full h-12 bg-gray-300 rounded-md outline-none p-4 mb-2' type="text" />
                    </div>

                    <div className='flex flex-col justify-center items-start w-5/6'>
                        <label className='text-xl'>
                            Password
                        </label>
                        <input value={data.password} 
                            onChange={(e) => setData({...data, password: e.target.value})} 
                            className='w-full h-12 bg-gray-300 rounded-md outline-none p-4 mb-2' type="text" />
                    </div>

                    <div className='flex flex-col justify-center items-start w-5/6'>
                        <label className='text-xl'>
                            Confirm Password
                        </label>
                        <input value={data.confirm_password} 
                            onChange={(e) => setData({...data, confirm_password: e.target.value})} 
                            className='w-full h-12 bg-gray-300 rounded-md outline-none p-4 mb-2' type="text" />
                    </div>

                    <button onClick={() => onSignUpSubmit(data)} className='mt-6 w-5/6 h-12 bg-blue-700 text-white rounded-md'>
                        Submit
                    </button>
                </div>
    )
}