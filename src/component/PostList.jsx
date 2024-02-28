import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { PostListContext } from "../store/PostListContext";
import LoadingSpinner from "./LoadingSpinner";
import PostCard from "./PostCard";

function PostList(){
    const [fetching, setFetching ]=useState(false);
    const {postList, addMultiplePostsFormServer}=useContext(PostListContext);

    useEffect(()=>{
        const controller =new AbortController();
        const signal=controller.signal;

        setFetching(true);
        fetch('https://dummyjson.com/posts', {signal})
            .then(res => res.json())
            .then((data=>{addMultiplePostsFormServer(data.posts)
            setFetching(false)})
        );
        return ()=>{
            console.log("Abort called!")
            controller.abort();
        }

        
    },[])

    // const handleFetchButton=()=>{
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then((data=>addMultiplePostsFormServer(data.posts)));
    // }

    return (
        <>
        {fetching===true && <LoadingSpinner/>}
        {postList.length==0 && fetching===false &&
        <center>
            <h1 style={{marginTop:"30px", textAlign:"center"}}>
                No posts are here yet, please do post..
            </h1>
        </center>}
        
        {postList.map((post)=><PostCard key={post.id} post={post}/>)}
        </>
    )
}

export default PostList;