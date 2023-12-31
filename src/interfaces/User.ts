// Importe a enumeração MediaType se você quiser usá-la aqui

import { Post } from "./Post";
import { Like } from "./Like";
import { Share } from "./Share";

export interface User {
    id: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    profile_picture?: string | null;
    posts?: Post[];
    likes?: Like[];
    comments?: Comment[];
    shares?: Share[];
}
  
