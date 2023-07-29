import { SignUpPayload } from "@/interfaces/SignUpPayload";
import { httpClient } from "../api";

export async function loginService(email: string, password: string) {
    const response = await httpClient.post('account/auth/login', {email, password});

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
    const response = await httpClient.post('account/auth/login', {...data});

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