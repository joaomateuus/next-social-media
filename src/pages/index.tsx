import { useState } from 'react';
import styles from '../styles/index.module.css';

export default function Home() {
    const [activeTab, setActiveTab] = useState('login');
    const styleForActiveTab = 'border-b border-black text-xl';
    const styleForActiveBoxLogin = "flex flex-col justify-start items-start h-3/4 w-1/2 rounded-md border-2 border-black"; 
    const styleForActiveSignUp = "flex flex-col justify-start items-start h-4/5 w-1/2 rounded-md border-2 border-black"; 

    const handleTabsClick = (clickedTab: string) => {
        setActiveTab(clickedTab)
    };
  
  
    return (
    <>
        <div className='flex items-start justify-start h-screen w-full'>
            <div className={styles.login_bg}></div>
            <div className="flex items-center justify-center h-full w-full">
                <div className={
                    activeTab === "login" ? styleForActiveBoxLogin : styleForActiveSignUp
                }>
                    <ul className="flex justify-center flex-wrap -mb-px text-sm font-medium text-center w-full">
                        <li className="mr-2 w-fit p-4 text-lg" role="presentation">
                            <button onClick={() => handleTabsClick("login")} type="button" className={activeTab === "login" ? styleForActiveTab : ""}>
                                Login
                            </button>
                        </li>
                        <li className="w-fit p-4 text-lg" role="presentation">
                            <button onClick={() => handleTabsClick("signup")} className={activeTab === "signup" ? styleForActiveTab : ""}>
                                Sign Up
                            </button>
                        </li>
                    </ul>
                    <div className='flex flex-col items-center justify-center h-full w-full p-4'>
                        <div className='flex flex-col justify-center items-start w-5/6'>
                            <label>
                                Username
                            </label>
                            <input className='w-full h-12 bg-gray-300 rounded-md outline-none p-4' type="text" />
                        </div>

                        <div className='flex flex-col justify-center items-start w-5/6'>
                            <label>
                                Password
                            </label>
                            <input className='w-full h-12 bg-gray-300 rounded-md outline-none p-4' type="text" />
                        </div>

                        <button className='mt-6 w-5/6 h-12 bg-blue-700 text-white rounded-md'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
        


    )


}

