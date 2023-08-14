import { Post } from "@/interfaces/Post";
import { httpClient } from "@/services/api";
import { ServiceErrors } from "@/services/auth";

interface LoginPayload{
    data: Post[]
    errors: ServiceErrors | null
};

interface CreatePostPayload{
    data: Post
    errors: ServiceErrors | null
};

export async function getPostsService(): Promise<LoginPayload> {
    const response = await httpClient.get('api/v1/posts');

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

export async function createPostService(data: FormData): Promise<CreatePostPayload> {
    const response = await httpClient.post('api/v1/posts', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

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