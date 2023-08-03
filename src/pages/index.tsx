'use-client';
import { useContext, useState } from 'react';
import styles from '../styles/index.module.css';
import SignUpForm from '@/components/SignUpForm';
import LoginForm from '@/components/LoginForm';
import { SignUpPayload } from '@/interfaces/SignUpPayload';
import { AuthContext, UserData } from '@/context';
import { useRouter } from 'next/router';
import { createUserService } from '@/services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [activeTab, setActiveTab] = useState('login');
    const router = useRouter();
    const styleForActiveTab = 'border-b border-black text-xl';
    const styleForActiveBoxLogin = "flex flex-col justify-start items-start h-3/4 w-1/2"; 
    const styleForActiveSignUp = "flex flex-col justify-start items-start h-3/4 w-1/2"; 

    const { login } = useContext(AuthContext);

    const handleLoginFormSubmit = async (payload: UserData) => {
        try {
            await login(payload);
            router.push('/Home');
        } catch (error) {
            toast.error(
                "Was not possible to login, please check your credentials and try again"
            )
            console.log(error);
        }
    };

    const handleSignUpFormSubmit = async (SignUpPayload: SignUpPayload) => {
        try {
            const { confirm_password, ...payload } = SignUpPayload
            const { errors } = await createUserService(payload);

            if (!errors) {
                toast.success("User created with sucessfully")
            }

        } catch (error) {
            toast.error("Was not possible to create the user, check the form validations")
            console.log(error)
        }
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
                        <li className="mr-2 w-fit p-4 text-lg">
                            <button onClick={() => handleTabsClick("login")} type="button" className={activeTab === "login" ? styleForActiveTab : ""}>
                                Login
                            </button>
                        </li>
                        <li className="w-fit p-4 text-lg">
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
                <ToastContainer />
            </div>
        </div>
    </>
)}

