import { Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";

function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <Routes>
          <Route>
            <Route element={<PageLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="home" element={<Home />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
