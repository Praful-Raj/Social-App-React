import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";

// const DEFAULT_CONTEXT=[
    // {
    //     id:1,
    //     title: 'Going to Mumbai',
    //     body:'Hi guys, I am going to Mumbai',
    //     reactions:2,
    //     user_id:'user-2',
    //     tags:["gatewayOFIndia","trip","travelling"]
    // },
    // {
    //     id:2,
    //     title: 'Learning Swimming',
    //     body:'Hi guys, I am learning swimming',
    //     reactions:3,
    //     user_id:'user-1',
    //     tags:["swimming","water","lesson"]
    // },
// ]

export const PostListContext=createContext({
    postList:[],
    // fetching: false,
    addPost:()=>{},
    deletePost:()=>{},
});

const postListReducer=(currPostList, action)=>{ 
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=currPostList.filter((post)=>post.id!= action.payload.userID )
    }
    else if(action.type==='ADD_MULTIPLE_POSTS'){
        newPostList=action.payload.posts
    }
    else if(action.type==='ADD_POST'){
        newPostList=[action.payload, ...currPostList]
    }
    currPostList=newPostList;
    return currPostList;
}



const PostListProvider=({children})=>{
    const [postList, dispatchPostList]=useReducer(postListReducer,[]);
    // const [fetching, setFetching ]=useState(false);


    const addMultiplePostsFormServer=(posts)=>{
        dispatchPostList({
            type:'ADD_MULTIPLE_POSTS',
            payload:{
                posts,
            }
        })
    }

    const addPost=(userId,title,body,reactions,tags)=>{
        // console.log(userId,title,body,reactions,tags)
        dispatchPostList({
            type:'ADD_POST',
            payload:{
                id: Date.now(),
                user_id:userId,
                title,
                body,
                reactions,
                tags,
            },
        });
    }
    
    const deletePost=(userID)=>{
        // console.log(`delete post called for id: ${userID}`)
        dispatchPostList({
            type:'DELETE_POST',
            payload:{
                userID,
            },
        });
    }
    // useEffect(()=>{
    //     const controller =new AbortController();
    //     const signal=controller.signal;

    //     setFetching(true);
    //     fetch('https://dummyjson.com/posts', {signal})
    //         .then(res => res.json())
    //         .then((data=>{addMultiplePostsFormServer(data.posts)
    //         setFetching(false)})
    //     );
    //     return ()=>{
    //         console.log("Abort called!")
    //         controller.abort();
    //     }

        
    // },[])
    return (
        <PostListContext.Provider value={{
            postList,
            // fetching,
            addPost,
            deletePost,
        }}>{children}</PostListContext.Provider>
    )
}

export default PostListProvider;