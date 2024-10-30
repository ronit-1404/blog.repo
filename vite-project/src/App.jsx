// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Blog from "./pages/blog/Blog";
// import AllBlogs from "./pages/allblogs/AllBlogs";
// import NoPage from "./pages/nopage/Nopage";
// import BlogInfo from "./pages/bloginfo/BlogInfo";
// import AdminLogin from "./pages/admin/adminlogin/AdminLogin";
// import Dashboard from "./pages/admin/dashboard/Dashboard";
// import MyState from "./context/data/myState";
// import CreateBlog from "./pages/admin/createblog/Createblog";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <MyState>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/allblogs" element={<AllBlogs />} />
//           <Route path="/bloginfo/:id" element={<BlogInfo />} />
//           <Route path="/adminlogin" element={<AdminLogin />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/createblog" element={<CreateBlog />} />
//           <Route path="/*" element={<NoPage />} />
//         </Routes>
//         <Toaster/>
//       </Router>
//     </MyState>
//   )
// }

// export default App

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allblogs/AllBlogs";
import NoPage from "./pages/nopage/Nopage";
import BlogInfo from "./pages/bloginfo/BlogInfo";
import AdminLogin from "./pages/admin/adminlogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/myState";
import CreateBlog from "./pages/admin/createblog/Createblog";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/createblog" element={
            <ProtectedRouteForAdmin>
              <CreateBlog />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App;


export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "ronitdhase1@gmail.com") {
    return children;
  } else {
    return <Navigate to="/dashboard" />;
  }
};
