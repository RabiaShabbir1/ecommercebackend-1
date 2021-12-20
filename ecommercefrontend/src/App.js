import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage";
import PostAdminPage from "./components/PostAdminPage";
import CatNav from "./components/UserComps/CatNav";
import PostUserPage from "./components/UserComps/PostUserPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/postSignin" element={<PostAdminPage />} />
        <Route exact path="/user/home" element={<PostUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
