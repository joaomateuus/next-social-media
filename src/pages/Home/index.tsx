import Sidebar from "@/components/Sidebar";
import styles from "../../styles/home.module.css";
import { useEffect, useState } from "react";
import { MediaType, Post } from "@/interfaces/Post";
import { useRouter } from "next/router";
import { getPostsService } from "@/services/core/posts";

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewPost] = useState<Post>({
        content: '',	
        media_type: MediaType.TEXT,
    });
    const router = useRouter();

    const fetchPosts = async () => {
        try {
            const { data, errors } = await getPostsService();	
            if (errors) { router.push('/'); }
            setPosts(data);
            console.log(posts)
        } catch (error) {
            console.log(error);
            router.push('/');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [newPost]);

    //Todo:
    //  - Transformar post em componente
    // - Criar service para criar post
    // - Criar componente de comentário

    return(
        <div className={styles.home_page_wrapper}>
            <Sidebar />
            <div className="h-screen w-3/5 ml-2 rounded-md bg-white">
                <div className="flex flex-col items-center justify-center p-4 border-2">
                    <div className="flex items-center justify-center h-fit w-5/6 mb-4">
                        <textarea className="h-32 w-4/5 border-2 border-blue-300 outline-none rounded-md p-2"  />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center justify-start w-full">
                            <div className="cursor-pointer">
                                <img className="h-12 w-12 rounded-full"
                                    src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png" alt="" />
                            </div>
                            <div className="ml-4 cursor-pointer">
                                <img className="h-10 w-10"
                                    src="https://freepngimg.com/thumb/video_icon/30060-5-video-icon-free-download.png" alt="" />
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly w-96 p-4">
                            <div>
                                <button className="px-6 py-2 bg-blue-400 text-white rounded-md">Publicar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start p-4 w-full">
                    {posts.map((post, index) => {
                        return(
                            <div className="flex flex-col items-start h-fit w-full border-b border-gray-300 p-8" key={index}>
                                <div className="flex items-center justify-between w-full mb-4">
                                    <div className="flex items-center w-72">
                                        <img className="h-12 w-12 rounded-full"
                                            src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
                                        <span className="ml-4 text-md text-bold">Nome da Pessoa</span>
                                        <span className="text-sm text-thin text-gray-300 ml-2 mt-1">@username</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-thin mt-1">7h</span>
                                    </div>
                                    
                                </div>
                                <div className="w-full">
                                    <span>{[post.content]}</span>
                                </div>
                                {post.media_url && (
                                    <div className="flex h-full w-full">
                                        <img src={post.media_url} alt="" />
                                    </div>
                                )}
                                <div className="flex items-start justify-evenly w-96 mt-8 mb-4">
                                    <div>
                                        <button className="px-6 py-2 bg-blue-400 text-white rounded-md">Curtir</button>
                                    </div>
                                    <div>
                                        <button className="px-6 py-2 bg-blue-400 text-white rounded-md">Compartilhar</button>
                                    </div>
                                    <div>
                                        <button className="px-6 py-2 bg-blue-400 text-white rounded-md">Comentar</button>
                                    </div>
                                </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex items-center justify-center h-screen w-1/5 ml-2 bg-white rounded-md">
                <h1>Chat</h1>
            </div>
        </div>
    )    
}