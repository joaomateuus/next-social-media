export interface SignUpPayload {
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    confirm_password?: string;
}