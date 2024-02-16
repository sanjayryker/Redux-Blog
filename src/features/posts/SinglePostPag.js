import { useSelector } from "react-redux"
import { selectPostById } from "./postSlice"

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

import { Link, useParams } from "react-router-dom"


const SinglePostPag = () => {
    const {postId} = useParams()
    const post = useSelector((state) => selectPostById(state,Number(postId)))
    if(!post)
    { return(
        <section>
            <h2>Post Not Found </h2>
        </section>
    )}
  return (
    <section className="postSection">
    <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p className='postCredit'>
            <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
            <PostAuthor userId = {post.userId} /> 
        </p>
        <p className="postCredit">
        <TimeAgo time = {post.date}/>
        </p>
        <ReactionButtons post = {post}/>           
    </article>
    </section>
  )
}

export default SinglePostPag