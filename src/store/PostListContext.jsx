import { createContext } from "react";

const PostListContext=createContext({});

const PostListProvider=({children})=>{
    return (
        <PostListContext.Provider value={[]}>{children}</PostListContext.Provider>
    )
}

export default PostListProvider;