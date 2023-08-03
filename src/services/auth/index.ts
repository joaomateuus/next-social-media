import { SignUpPayload } from "@/interfaces/SignUpPayload";
import { httpClient } from "../api";

interface LoginPayload{
    data: {
        token: string,
        username: string
    }
    errors: ServiceErrors | null
};

export interface ServiceErrors{
    status: number,
    message: string
}

export async function loginService(username: string, password: string): Promise<LoginPayload> {
    const response = await httpClient.post('account/auth/login', {username, password});

    let errors = null;

    if(!response.data) {
        errors = {
            status: response.status,
            message: response.statusText
        }
    }

    return {
        data: response.data,
        errors
    }
}

export async function createUserService(data: SignUpPayload) {
    const response = await httpClient.post('account/auth/sign_up', {...data});

    let errors = null;

    if(!response.data) {
        errors = {
            status: response.status,
            message: response.statusText
        }
    }

    return {
        data: response.data,
        errors
    }
}