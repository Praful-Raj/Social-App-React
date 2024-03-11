import { useContext } from "react";
import { useRef } from "react";
import { PostListContext } from "../store/PostListContext";
import {useNavigate} from 'react-router-dom'

function CreatePost(){
    const {addPost} =useContext(PostListContext);
    const navigate=useNavigate();

    const userIdElement=useRef();
    const titleElement=useRef();
    const bodyElement=useRef();
    const reactionsElement=useRef();
    const tagsElement=useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const userId=userIdElement.current.value;
        const title=titleElement.current.value;
        const body=bodyElement.current.value;
        const reactions=reactionsElement.current.value;
        const tags=tagsElement.current.value.split(" ");

        addPost(userId,title,body,reactions,tags);
        
        userIdElement.current.value="";
        titleElement.current.value="";
        bodyElement.current.value="";
        reactionsElement.current.value="";
        tagsElement.current.value="";

        navigate("/");
    }


    return (
        <form className="create-post" onSubmit={handleSubmit}>
             <div className="mb-3">
                <label htmlFor="userId" className="form-label">User ID</label>
                <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Enter your user id.."/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={titleElement} className="form-control" id="title" placeholder="How are you feeling today..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea rows="5" cols="50" type="text" ref={bodyElement} className="form-control" id="body" placeholder="Share some thoughts here..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of reactions to this post</label>
                <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="Enter the number of reactions.."/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Hashtags</label>
                <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Write tags with spaces.."/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
export default CreatePost;