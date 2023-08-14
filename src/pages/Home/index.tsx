import Sidebar from "@/components/Sidebar";
import styles from "../../styles/home.module.css";
import { useEffect, useState } from "react";
import { MediaType, Post } from "@/interfaces/Post";
import { useRouter } from "next/router";
import { createPostService, getPostsService } from "@/services/core/posts";

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [needFetch, setNeedFetch] = useState<boolean>(false); // [TODO] - [REFACTOR] - [REVIEW]
    const [newPost, setNewPost] = useState<Post>({
        content: '',
        media_url: '',	
        media_type: MediaType.TEXT,
        authorId: 1,
    });
    const [media, setMedia] = useState<File | null>(null);
    const router = useRouter();
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    // const videoExtensions = [".mp4", ".mov", ".avi"];
    
    const fetchPosts = async () => {
        try {
            const { data } = await getPostsService();	
            setPosts(data);
            console.log(posts)
        } catch (error) {
            console.log(error);
        }
    };

    const createPost = async () => {
        try {
            const form = new FormData();
            if(media) {
                // const mediaType = imageExtensions.includes(
                //     media.name.split('.').pop() as string
                // ) ? MediaType.IMAGE : MediaType.VIDEO;
                
                form.append('media_type', MediaType.IMAGE)
                form.append('post', media); 
            }            

            form.append('content', newPost.content) 
            form.append('authorId', `${newPost.authorId}`)
        
            const { errors } = await createPostService(form);
            if (!errors) { 
                setNewPost({
                    content: '',
                    media_url: '',	
                    media_type: MediaType.TEXT,
                    authorId: 1,
                })
            }
            setNeedFetch(!needFetch);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(!e.target.files) return;
        
        setMedia(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    useEffect(() => {
        console.log(posts)
        if(posts.length === 0 || needFetch){
            fetchPosts();
            setNeedFetch(false);
        }
       
    },);

    // Todo:
    // - Transformar post em componente
    // - Criar service para criar post
    // - Criar componente de comentário

    return(
        <div className={styles.home_page_wrapper}>
            <Sidebar />
            <div className="flex flex-col items-center justify-start bg-white p-4 h-fit w-3/5 ml-2 rounded-md mb-6">
                <div className="flex flex-col items-center justify-center h-fit w-5/6 mb-4">
                        <textarea
                            onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                            value={newPost.content}
                            placeholder="O que você está pensando?" 
                            className="h-32 w-4/5 border-2 border-blue-300 outline-none rounded-md p-2"  />
                        <div className="flex items-center justify-between w-full border-b">
                            <div className="flex items-center justify-start w-full">
                                <div className="cursor-pointer">
                                    <label htmlFor="media-input">
                                        <img className="h-12 w-12 rounded-full"
                                            src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png" alt="" />
                                    </label>
                                    <input id="media-input" type="file" className="sr-only" onChange={handleFileChange} />
                                </div>
                                <div className="ml-4 cursor-pointer">
                                    <img className="h-10 w-10"
                                        src="https://freepngimg.com/thumb/video_icon/30060-5-video-icon-free-download.png" alt="" />
                                </div>
                            </div>
                            <div className="flex items-center justify-evenly w-96 p-4">
                                <div>
                                    <button
                                        disabled={newPost.content.length === 0}
                                        onClick={createPost} 
                                        className="px-6 py-2 bg-blue-400 text-white rounded-md">Publicar</button>
                                </div>
                            </div>
                        </div>
                    </div>
               
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
                                <div className="flex h-full w-full">
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
            <div className="flex items-center justify-center h-screen w-1/5 ml-2 bg-white rounded-md">
                <h1>Chat</h1>
            </div>
        </div>
    )    
}