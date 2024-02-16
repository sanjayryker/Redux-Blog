import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { selectPostById,updatePost,deletePost } from "./postSlice"
import { selectAllUsers } from "../users/userSlice"


const EditPostForm = () => {

    const {postId} = useParams()
    const navigate = useNavigate()
    
    const post = useSelector((state) => selectPostById(state,Number(postId)))
    const users = useSelector(selectAllUsers)

    const dispatch = useDispatch()
    const [title,setTitle] = useState(post?.title)
    const [content, setContent] = useState(post?.body)
    const[userId , setUserId] = useState(post?.userId)
    const[reqStatus, setReqStatus] = useState('idle')

    

    if(!post)
    {
        return (
            <section>
                <h2> Posts not Found </h2>
            </section>
        )
    }

    const canSave = [title,content,userId].every(Boolean) && reqStatus === "idle"

    const onSavePostClicked = () =>
    {
       if(canSave)
       {
        try{
            setReqStatus('pending')
            dispatch(updatePost({id:post.id, title, body: content, userId, reactions: post.reactions})).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigate(`/post/${postId}`)
        }catch(err){
            console.error("failed to save the post",err)
        }finally{
            setReqStatus('idle')
        }
       }
    }

    const userOptions = users.map((map) => (
        <option value={map.id} key={map.id}>{map.name} </option>
    ))

    const onDeletePostClicked = () => 
    {
        try{
            setReqStatus('pending')
            dispatch(deletePost({id: post.id})).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
        }catch(err){
            console.error("failed to save the post",err)
        }finally{
            setReqStatus('idle')
        }
    }

   
    
  return (

    <section>
        <h2 className="h2"> Edit Post </h2>
        <form>
            <label htmlFor='postTitle'>Post Title</label>
            <input 
            type='text' 
            name='postTitle'
            id='postTitle'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <label htmlFor='postAuthor'>Author</label>
            <select id='postAuthor' value={userId} onChange={(e) => setUserId(e.target.value) }>
                <option value=''></option>
                {userOptions}
            </select>
            <label htmlFor='postContent'>Description</label>
            <textarea
            name='postContent'
            id='postContent'
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            />
            <button type='button' onClick={onSavePostClicked} disabled = {!canSave}>Save Post</button>
            <button type='button' className="deleteButton" onClick={onDeletePostClicked} >Delete Post</button>
            
        </form>
    </section>
    
  )
}

export default EditPostForm