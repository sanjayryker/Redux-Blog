import {  useSelector } from "react-redux";
import {selectAllUsers} from "./userSlice"
import { Link } from "react-router-dom";



const UsersList = () => {

    const users = useSelector(selectAllUsers)
    const renderedUsers = users.map(user =>
        { return(
            <div className="userContainer" key={user.id}>
                <Link className="authLink" to={`/user/${user.id}`}>{user.name}</Link>
            </div>
        )})
  return (
    <section>
        <h2>Authors</h2>
        {renderedUsers}
    </section>
  )
}

export default UsersList