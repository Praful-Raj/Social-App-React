import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useContext } from "react";
import { PostListContext } from "../store/PostListContext";

function PostCard({post}){
    const {deletePost}= useContext(PostListContext);


    return(
        <div key={post.title} className="card card-style" style={{width: "18rem"}}>
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
                <h5 className="card-title">{post.title}
                    <span onClick={()=>deletePost(post.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <MdDelete />
                        <span className="visually-hidden">Delete Post</span>
                    </span>
                    <span className="position-absolute top-100 start-0 translate-middle badge rounded-pill bg-danger">
                        <FaEye/>  {post.reactions}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                {post.tags.map((tag)=><span key={{tag}} className="badge text-bg-primary hashtag">{tag}</span>)}
            </div>
        </div>
    )
}

export default PostCard;