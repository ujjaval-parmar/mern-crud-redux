import { BrowserRouter, Routes, Route } from "react-router-dom";

import Users from "./components/user/Users";
import CreateUser from "./components/user/CreateUser";
import { UpdateUser } from "./components/user/UpdateUser";




export function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/edit/:id' element={<UpdateUser />}></Route>

     </Routes>
    </BrowserRouter>
  )
}
