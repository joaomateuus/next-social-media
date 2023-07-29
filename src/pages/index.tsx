'use-client';
import { useContext, useState } from 'react';
import styles from '../styles/index.module.css';
import SignUpForm from '@/components/SignUpForm';
import LoginForm from '@/components/LoginForm';
import { SignUpPayload } from '@/interfaces/SignUpPayload';
import { AuthContext, UserData } from '@/context';
import { useRouter } from 'next/router';

export default function Home() {
    const [activeTab, setActiveTab] = useState('login');
    const router = useRouter();
    const styleForActiveTab = 'border-b border-black text-xl';
    const styleForActiveBoxLogin = "flex flex-col justify-start items-start h-3/4 w-1/2"; 
    const styleForActiveSignUp = "flex flex-col justify-start items-start h-3/4 w-1/2"; 

    const { login } = useContext(AuthContext);

    const handleLoginFormSubmit = async (data: UserData) => {
        try {
            await login(data)
            router.push('/Home')
        } catch (error) {
            console.log(error)
        }
    };

    const handleSignUpFormSubmit = (data: SignUpPayload) => {
        console.log(data);
    };

    const handleTabsClick = (clickedTab: string) => {
        setActiveTab(clickedTab)
    };

    return (
    <>
        <div className='flex items-start justify-start h-screen w-full'>
            <div className={styles.login_bg}></div>
            <div className="flex items-center justify-center h-full w-4/5">
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
                    {
                        activeTab === "login" 
                        ? <LoginForm onLoginSubmit={handleLoginFormSubmit} />
                        : <SignUpForm onSignUpSubmit={handleSignUpFormSubmit} />
                    }
                </div>
            </div>
        </div>
    </>
)}

