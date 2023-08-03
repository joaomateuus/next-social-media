import Sidebar from "@/components/Sidebar";
import styles from "../../styles/home.module.css";

export default function Home() {
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
                            <div className="">
                                <button className="px-2 py-2 bg-blue-400 text-white rounded-md">Compartilhar</button>
                            </div>
                            <div>
                                <button className="px-6 py-2 bg-blue-400 text-white rounded-md">Publicar</button>
                            </div>
                                                        
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <h1>asdasd</h1>
                </div>
            </div>
            <div className="flex items-center justify-center h-screen w-1/5 ml-2 bg-white rounded-md">
                <h1>Chat</h1>
            </div>
        </div>
    )    
}