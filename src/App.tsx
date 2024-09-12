import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import ThemeContextProvider from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import HeaderLogo from "./assets/header_logo.png";
import ErrorPage from "./pages/ErrorPage";
import UserContextProvider from "./contexts/UserContext";

function App() {

  return (
    <BrowserRouter>
    <ThemeContextProvider>
    <UserContextProvider>
      <div className="app-container">
        <Header headerLogo={HeaderLogo}/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="overview/:c_id" element={<Overview/>}/>
          <Route path="signin" element={<Login/>}/>
          <Route path="*" element={<ErrorPage error={{name: "Page not found", message: "Couldn`t find the"}}/>} />
        </Routes>
      </div>
    </UserContextProvider>
    </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
