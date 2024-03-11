import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { PostListContext } from "../store/PostListContext";
import LoadingSpinner from "./LoadingSpinner";
import PostCard from "./PostCard";
import {useLoaderData} from 'react-router-dom'

const PostList=()=> {
    // const {postList, fetching}=useContext(PostListContext);
    const postList=useLoaderData();

    // const handleFetchButton=()=>{
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then((data=>addMultiplePostsFormServer(data.posts)));
    // }

    return (
        <>
        {/* {fetching && <LoadingSpinner/>}
        {postList.length==0 && fetching===false &&
        <center>
            <h1 style={{marginTop:"30px", textAlign:"center"}}>
                No posts are here yet, please do post..
            </h1>
        </center>} */}

        {/* using Loader */}
        {postList.length==0 &&
        <center>
            <h1 style={{marginTop:"30px", textAlign:"center"}}>
                No posts are here yet, please do post..
            </h1>
        </center>}
        
        {postList.map((post)=><PostCard key={post.id} post={post}/>)}
        </>
    )
}

export const postLoader=()=>{
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data)=> {return data.posts;}  
);
}

export default PostList;