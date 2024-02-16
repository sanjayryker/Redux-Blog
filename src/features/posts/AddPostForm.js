import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost } from './postSlice'
import { selectAllUsers } from '../users/userSlice'
import { useNavigate } from 'react-router-dom'


const AddPostForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title,setTitle] = useState('')
    const [content, setContent] = useState('')
    const[userId , setUserId] = useState('')
    const[addReqStatus, setAddReqStatus] = useState('idle')
    
    const users = useSelector(selectAllUsers)

    const canSave = [title,content,userId].every(Boolean) && addReqStatus === "idle"

    const onSavePostClicked = () =>
    {
       if(canSave)
       {
        try{
            setAddReqStatus('pending')
            dispatch(addNewPost({title,body:content,userId})).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
        }catch(err){
            console.error("failed to save the post",err)
        }finally{
            setAddReqStatus('idle')
        }
       }
    }

    const userOptions = users.map((map) => (
        <option value={map.id} key={map.id}>{map.name} </option>
    ))


  return (
    <section>
        <h2 className='h2'> Add New Post </h2>
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
            
        </form>
    </section>
  )
}

export default AddPostForm