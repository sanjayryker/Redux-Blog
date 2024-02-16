// import Counter from "./features/counter/Counter";
import PostLis from "./features/posts/PostLis";
import AddPostForm from "./features/posts/AddPostForm";
import { Routes,Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import SinglePostPag from "./features/posts/SinglePostPag";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
function App() 
  {
    return(
     <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostLis />}/>

        <Route path="post">
          <Route index element={<AddPostForm />}/>
          <Route path=":postId" element={<SinglePostPag />}/>
          <Route path="edit/:postId" element={<EditPostForm/>}/>
        </Route>  

        <Route path="user">
          <Route index element={<UsersList/>} />
          <Route path=":userId" element={<UserPage/>}/>
        </Route>

        <Route path="*" element={<Navigate to = "/" replace />}/>

      </Route>
     </Routes>
    
    )
  }

export default App;
