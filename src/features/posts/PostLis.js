// import { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import { selectPostIds, getPostsError,getPostsStatus } from './postSlice'
import PostExcerpt from './PostExcerpt'


const PostLis = () => {

    const orderedPostsByIds = useSelector(selectPostIds)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)
    // const dispatch = useDispatch()
    
    /* useEffect(() =>
    {
        if(postStatus === "idle"){
            dispatch(fetchPosts())
        }
    },[postStatus,dispatch]) */

    let content ; 
    if(postStatus === "loading"){
        content = <p>"Loading..."</p>
    } else if(postStatus === "succeeded"){

    content  = orderedPostsByIds.map(postId => <PostExcerpt key={postId} postId ={postId}/>

        )
    }else if(postStatus === "failed"){
        content = <p>{error}</p>
    }
    
  return (
    <section>
        <h2 className='h2'>Posts</h2>
        {content}
    </section>
  )
}

export default PostLis