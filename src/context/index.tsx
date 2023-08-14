import React, { createContext, useCallback, useState } from "react";
import { httpClient } from "@/services/api";
import { loginService } from "@/services/auth";

interface ComponentProps{
    children: React.ReactNode;
};

interface AuthContextState {
    token: string | null;
    login({username, password}: UserData): Promise<void>;
    isUserLogged: boolean
    logoutUser(): void
};

export interface UserData{
    username: string;
    password: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC<ComponentProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

    const login = useCallback(async ({username, password}: UserData) => {
        const { data, errors } = await loginService(username, password);

        if(errors?.status === 401) {alert("Usuário ou senha inválidos")}

        if(errors) { return };

        localStorage.setItem("token", data.token);
        httpClient.defaults.headers.authorization = `Bearer ${data.token}`
        
        setToken(data.token)
        setIsUserLogged(true)
    }, [])

    const logoutUser = () => {
        setToken(null)
        setIsUserLogged(false)
    }

    return(
        <AuthContext.Provider value={{ token, login, isUserLogged, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }