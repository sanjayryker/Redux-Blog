import {useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import {  selectUserById } from "./userSlice"
import { selectAllPosts } from "../posts/postSlice"

const UserPage = () => {
    const {userId} = useParams()
    const user = useSelector((state) => selectUserById(state,Number(userId)))

    const allPosts = useSelector(selectAllPosts)
    const postsForUser = allPosts.filter((item) => item.userId === Number(userId))

    const postTitles = postsForUser.map((post) => 
    {
        return(
        <li className="userContainer" key={post.id}>
            <Link className="authLink" to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    )})
  return (
    <section>
        <h2 className="h2">{user?.name}</h2>
        <ol>{postTitles}</ol>
    </section>
  )
}

export default UserPage